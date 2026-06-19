import imageKit from "../configs/imageKit.js";
import Resume from "../models/resume.js";
import fs from "fs";

// ================= CREATE RESUME =================
// POST: /api/resumes/create

export const createResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { title } = req.body;

    // create new resume
    const newResume = await Resume.create({
      userId,
      title,
    });

    return res.status(201).json({
      message: "Resume created successfully",
      resume: newResume,
    });
  } catch (error) {
    console.error("Create Resume Backend Error:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= DELETE RESUME =================
// DELETE: /api/resumes/delete/:resumeId

export const deleteResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const deletedResume = await Resume.findOneAndDelete({
      userId,
      _id: resumeId,
    });

    if (!deletedResume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      message: "Resume deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET RESUME BY ID =================
// GET: /api/resumes/get/:resumeId

export const getResumeById = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId } = req.params;

    const resume = await Resume.findOne({
      userId,
      _id: resumeId,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    // remove unnecessary fields
    resume.__v = undefined;
    resume.createdAt = undefined;
    resume.updatedAt = undefined;

    return res.status(200).json({
      resume,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET PUBLIC RESUME =================
// GET: /api/resumes/public/:resumeId

export const getPublicResumeById = async (req, res) => {
  try {
    const { resumeId } = req.params;

    const resume = await Resume.findOne({
      public: true,
      _id: resumeId,
    });

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      resume,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= UPDATE RESUME =================
// PUT: /api/resumes/update

export const updateResume = async (req, res) => {
  try {
    const userId = req.userId;
    const { resumeId, resumeData, removeBackground } = req.body;
    const image = req.file;

    // convert JSON string to object
    let resumeDataCopy = typeof resumeData === "string"
      ? JSON.parse(resumeData)
      : resumeData;

    if (resumeDataCopy.personal_info) {
      resumeDataCopy.personal_info.removeBackground = (removeBackground === "true" || removeBackground === true);
    }

    // upload image if exists
    if (image) {
      const stream = fs.createReadStream(image.path);
      let response;

      try {
        response = await imageKit.files.upload({
          file: stream,
          fileName: `resume-${userId}-${Date.now()}.png`,
          folder: "/user-resumes",
          tags: ["resume", userId],
        });
      } catch (err) {
        console.error("ImageKit upload failed:", err.message);
        throw err;
      }

      if (!response?.url) {
        throw new Error("Image upload failed: no response URL returned");
      }

      // Build transformation URL with correct ImageKit syntax
      let imageUrl = response.url;
      const transform = (removeBackground === "true" || removeBackground === true)
        ? "w-300,h-300,fo-face,e-bgremove"
        : "w-300,h-300,fo-face";
      imageUrl = imageUrl.includes("?")
        ? `${imageUrl}&tr=${transform}`
        : `${imageUrl}?tr=${transform}`;

      if (!resumeDataCopy.personal_info) {
        resumeDataCopy.personal_info = {};
      }

      resumeDataCopy.personal_info.image = imageUrl;

      // Clean up temporary file
      fs.promises.unlink(image.path).catch(() => {});
    }

    // update resume
    const resume = await Resume.findOneAndUpdate(
      { userId, _id: resumeId },
      { $set: resumeDataCopy },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    if (!resume) {
      return res.status(404).json({
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      message: "Saved successfully",
      resume,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
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
    let resumeDataCopy = JSON.parse(resumeData);

    // upload image if exists
    if (image) {
      const imageBufferData = fs.createReadStream(image.path);

      const response = await imageKit.upload({
        file: imageBufferData,
        fileName: "resume.png",
        folder: "/user-resumes",
        transformation: {
          pre:
            "w-300,h-300,fo-face,z-0.75" +
            (removeBackground ? ",e-bgremove" : ""),
        },
      });

      // save image url
      resumeDataCopy.personal_info.image = response.url;

      // remove temp file
      fs.unlinkSync(image.path);
    }

    // update resume
    const resume = await Resume.findOneAndUpdate(
      {
        userId,
        _id: resumeId,
      },
      resumeDataCopy,
      {
        new: true,
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
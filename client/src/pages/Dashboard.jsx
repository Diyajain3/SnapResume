import {
  FilePenLineIcon,
  PlusIcon,
  UploadCloudIcon,
  Pencil,
  Trash2,
  XIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import api from "../configs/api";
import pdfToText from "react-pdftotext";
import toast from "react-hot-toast";

function Dashboard() {
  const colors = [
    "#4f46e5",
    "#059669",
    "#e11d48",
    "#7c3aed",
    "#2563eb",
    "#db2777",
  ];

  const { token } = useSelector((state) => state.auth);
  const [allResumes, setAllResumes] = useState([]);

  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);

  const [title, setTitle] = useState("");
  const [resume, setResume] = useState(null);
  const [editResumeId, setEditResumeId] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const navigate = useNavigate();

  // ---------------- LOAD RESUMES ----------------
  const loadAllResumes = async () => {
    try {
      const { data } = await api.get("/api/users/resumes", {
        headers: { Authorization: token },
      });

      if (data.resumes) {
        const normalized = data.resumes.map((r) => ({
          ...r,
          project: r.projects || r.project || [],
        }));
        setAllResumes(normalized);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to load resumes");
    }
  };

  useEffect(() => {
    loadAllResumes();
  }, []);

  // ---------------- CREATE ----------------
  const createResume = async (event) => {
    event.preventDefault();
    try {
      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        { headers: { Authorization: token } }
      );

      if (data.resume) {
        setAllResumes([...allResumes, data.resume]);
        setShowCreateResume(false);
        setTitle("");
        navigate(`/app/builder/${data.resume._id}`);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  // ---------------- UPLOAD ----------------
  const uploadResume = async (event) => {
    event.preventDefault();

    if (!resume) {
      toast.error("Please select a PDF file.");
      return;
    }

    try {
      setIsUploading(true);
      const text = await pdfToText(resume);

      if (!text || !text.trim()) {
        toast.error("Could not read text from this PDF. Please upload a text-readable PDF file (not a scanned image).");
        return;
      }

      const { data } = await api.post(
        "/api/ai/upload-resume",
        { resumeText: text, title },
        { headers: { Authorization: token } }
      );

      if (data.resumeId) {
        setShowUploadResume(false);
        setTitle("");
        setResume(null);
        navigate(`/app/builder/${data.resumeId}`);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setIsUploading(false);
    }
  };

  // ---------------- EDIT ----------------
  const editTitle = async (event) => {
    event.preventDefault();

    try {
      const resumeToEdit = allResumes.find((r) => r._id === editResumeId);
      if (!resumeToEdit) return;

      const updatedResume = {
        ...resumeToEdit,
        title,
        projects: resumeToEdit.project,
      };

      const formData = new FormData();
      formData.append("resumeId", editResumeId);
      formData.append("resumeData", JSON.stringify(updatedResume));

      const { data } = await api.put("/api/resumes/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: token,
        },
      });

      if (data.resume) {
        setEditResumeId("");
        setTitle("");
        loadAllResumes();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    }
  };

  // ---------------- DELETE ----------------
  const deleteResume = async (resumeId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this resume?"
    );

    if (!confirmDelete) return;

    try {
      const { data } = await api.delete(
        `/api/resumes/delete/${resumeId}`,
        { headers: { Authorization: token } }
      );

      setAllResumes((prev) =>
        prev.filter((resume) => resume._id !== resumeId)
      );

      toast.success(data.message);
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <p className="text-2xl font-medium mb-6 bg-linear-to-r from-purple-600 to-indigo-700 bg-clip-text text-transparent sm:hidden">
        Welcome
      </p>

      {/* CREATE + UPLOAD */}
      <div className="flex gap-4">
        <button
          onClick={() => setShowCreateResume(true)}
          className="w-full sm:max-w-36 h-48 flex flex-col items-center justify-center border-dashed border rounded-lg"
        >
          <PlusIcon />
          <p>Create Resume</p>
        </button>

        <button
          onClick={() => setShowUploadResume(true)}
          className="w-full sm:max-w-36 h-48 flex flex-col items-center justify-center border-dashed border rounded-lg"
        >
          <UploadCloudIcon />
          <p>Upload</p>
        </button>
      </div>

      <hr className="my-6" />

      {/* RESUME GRID */}
      <div className="grid grid-cols-2 sm:flex flex-wrap gap-4">
        {allResumes.map((resume, index) => {
          const baseColor = colors[index % colors.length];

          return (
            <div
              key={resume._id}
              onClick={() => navigate(`/app/builder/${resume._id}`)}
              className="relative w-full sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg border group cursor-pointer overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                borderColor: baseColor + "40",
              }}
            >
              <FilePenLineIcon style={{ color: baseColor }} />

              <p style={{ color: baseColor }}>{resume.title}</p>

              <p className="absolute bottom-2 text-[10px]">
                Updated {new Date(resume.updatedAt).toLocaleDateString()}
              </p>

              {/* ACTIONS */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute left-2 top-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100"
              >
                <button
                  onClick={() => {
                    setEditResumeId(resume._id);
                    setTitle(resume.title);
                  }}
                >
                  <Pencil className="size-4" />
                </button>

                <button onClick={() => deleteResume(resume._id)}>
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {showCreateResume && (
        <form
          onSubmit={createResume}
          onClick={() => setShowCreateResume(false)}
          action=""
          className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-[120] flex items-center justify-center"
        >
          <div
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Create a Resume</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 focus:border-purple-600 ring-purple-600 border border-slate-300 rounded"
              required
            />

            <button className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors cursor-pointer">
              Create Resume
            </button>
            <XIcon
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              onClick={() => {
                setShowCreateResume(false);
                setTitle("");
              }}
            />
          </div>
        </form>
      )}

      {showUploadResume && (
        <form
          onSubmit={uploadResume}
          onClick={() => !isUploading && setShowUploadResume(false)}
          action=""
          className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-[120] flex items-center justify-center"
        >
          <div
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Upload Resume</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 focus:border-purple-600 ring-purple-600 border border-slate-300 rounded disabled:opacity-50 disabled:bg-slate-100"
              required
              disabled={isUploading}
            />

            <div className="">
              <label
                htmlFor="resume-input"
                className={`block text-sm text-slate-700 ${isUploading ? 'pointer-events-none opacity-50' : ''}`}
              >
                Select resume file
                <div className="flex flex-col items-center justify-center gap-2 border group text-slate-400 border-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-green-500 hover:text-green-700 cursor-pointer transition-colors">
                  {resume ? (
                    <p className="text-slate-700 font-semibold">{resume.name}</p>
                  ) : (
                    <>
                      <UploadCloudIcon className=" size-14 stroke-1" />
                      <p>Upload Resume</p>
                    </>
                  )}
                </div>
              </label>
              <input type="file" id="resume-input" accept=".pdf" hidden disabled={isUploading} onChange={(e)=> setResume(e.target.files[0])}/>
            </div>

            <button
              disabled={isUploading}
              className={`w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors flex items-center justify-center gap-2 ${isUploading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
            >
              {isUploading ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Uploading...
                </>
              ) : (
                "Upload Resume"
              )}
            </button>
            <XIcon
              className={`absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors ${isUploading ? 'pointer-events-none opacity-50' : 'cursor-pointer'}`}
              onClick={() => {
                if (isUploading) return;
                setShowUploadResume(false);
                setTitle("");
                setResume(null);
              }}
            />
          </div>
        </form>
      )}

      {editResumeId && (
        <form
          onSubmit={editTitle}
          onClick={() => setEditResumeId("")}
          action=""
          className="fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-[120] flex items-center justify-center"
        >
          <div
            className="relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">Edit Resume Title</h2>
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Enter resume title"
              className="w-full px-4 py-2 mb-4 focus:border-purple-600 ring-purple-600 border border-slate-300 rounded"
              required
            />

            <button className="w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors cursor-pointer">
              Update
            </button>
            <XIcon
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors"
              onClick={() => {
                setEditResumeId("");
                setTitle("");
              }}
            />
          </div>
        </form>
      )}
    </div>
  );
}

export default Dashboard;
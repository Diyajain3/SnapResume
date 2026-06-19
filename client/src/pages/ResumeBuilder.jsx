import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyResumeData } from "../assets/assets";
import {
  ArrowLeftIcon,
  User,
  FileText,
  Briefcase,
  GraduationCap,
  FolderIcon,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Share2Icon,
  EyeOffIcon,
  EyeIcon,
  DownloadIcon,
} from "lucide-react";
import PersonalInfoForm from "../components/PersonalInfoForm";
import ResumePreview from "../components/ResumePreview";
import TemplateSelector from "../components/TemplateSelector";
import ColorPicker from "../components/ColorPicker";
import ProfessionalSummaryForm from "../components/ProfessionalSummaryForm";
import ExperienceForm from "../components/ExperienceForm";
import EducationForm from "../components/EducationForm";
import ProjectForm from "../components/ProjectForm";
import SkillsForm from "../components/SkillsForm";
import api from "../configs/api";
import { useSelector } from "react-redux";

const ResumeBuilder = () => {
  const { resumeId } = useParams();

  const { token } = useSelector((state) => state.auth);

  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {
      removeBackground: false,
    },
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  });

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  const loadExistingResume = async () => {
    try {
      const { data } = await api.get(`/api/resumes/get/${resumeId}`);
      if (data.resume) {
        const resume = data.resume;
        resume.project = resume.projects || resume.project || [];
        resume.experience = resume.experience || [];
        resume.education = resume.education || [];
        resume.skills = resume.skills || [];
        resume.personal_info = resume.personal_info || { removeBackground: false };
        setResumeData(resume);
        document.title = resume.title;
        return;
      }
    } catch (error) {
      console.log("Could not load from API, trying dummy data...", error.message);
    }

    const resume = dummyResumeData.find((resume) => resume._id === resumeId);
    if (resume) {
      const resumeCopy = { ...resume };
      resumeCopy.project = resumeCopy.projects || resumeCopy.project || [];
      resumeCopy.experience = resumeCopy.experience || [];
      resumeCopy.education = resumeCopy.education || [];
      resumeCopy.skills = resumeCopy.skills || [];
      resumeCopy.personal_info = resumeCopy.personal_info || { removeBackground: false };
      setResumeData(resumeCopy);
      document.title = resumeCopy.title;
    }
  };

  const saveResume = async () => {
    try {
      const preparedData = {
        ...resumeData,
        projects: resumeData.project,
      };

      const formData = new FormData();
      formData.append("resumeId", resumeId);
      formData.append("resumeData", JSON.stringify(preparedData));
      formData.append(
        "removeBackground",
        resumeData.personal_info?.removeBackground === true ? "true" : "false"
      );

      // Check if image is a File object (newly uploaded)
      if (
        resumeData.personal_info?.image &&
        typeof resumeData.personal_info.image === "object" &&
        resumeData.personal_info.image instanceof File
      ) {
        formData.append("file", resumeData.personal_info.image);
      }

      const { data } = await api.put("/api/resumes/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (data.resume) {
        const resume = data.resume;
        resume.project = resume.projects || resume.project || [];
        resume.personal_info = resume.personal_info || { removeBackground: false };
        setResumeData(resume);
        alert("Saved successfully!");
      }
    } catch (error) {
      console.error("Error saving resume:", error.message);
      alert(error.response?.data?.message || "Failed to save resume");
    }
  };

  useEffect(() => {
    loadExistingResume();
  }, []);

  const sections = [
    { id: "personal", name: "Personal Info", icon: User },
    { id: "summary", name: "Summary", icon: FileText },
    { id: "experience", name: "Experience", icon: Briefcase },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "projects", name: "Projects", icon: FolderIcon },
    { id: "skills", name: "Skills", icon: Sparkles },
  ];

  const activeSection = sections[activeSectionIndex];

  const changeResumeVisibility = async () => {
    try {
      const updatedPublic = !resumeData.public;
      const updatedResume = { ...resumeData, public: updatedPublic };
      
      setResumeData(updatedResume);

      const preparedData = {
        ...updatedResume,
        projects: updatedResume.project
      };

      const formData = new FormData();
      formData.append("resumeId", resumeId);
      formData.append("resumeData", JSON.stringify(preparedData));
      formData.append("removeBackground", updatedResume.personal_info?.removeBackground ? "true" : "false");
      if (updatedResume.personal_info?.image && typeof updatedResume.personal_info.image === 'object') {
        formData.append("image", updatedResume.personal_info.image);
      }

      await api.put("/api/resumes/update", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
    } catch (error) {
      console.error("Error updating visibility:", error.message);
      alert(error.response?.data?.message || "Failed to update resume visibility");
    }
  };

  const handleShare = () => {
    const frontendUrl = window.location.href.split("/app/")[0];
    const resumeUrl = frontendUrl + "/view/" + resumeId;
    if (navigator.share) {
      navigator.share({ url: resumeUrl, text: "My Resume" });
    } else {
      navigator.clipboard
        .writeText(resumeUrl)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy link: ", err);
          alert("Failed to copy link. Please copy manually: " + resumeUrl);
        });
    }
  };

  const downloadResume = () => {
    window.print();
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6 no-print">
        <Link
          to={"/app"}
          className="inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all"
        >
          <ArrowLeftIcon className="size-4 mt-5px" /> Back to Dashboard
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/*Left form panel*/}
          <div className="relative lg:col-span-5 rounded-lg overflow-hidden no-print">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1">
              {/*progress bar using activeSectionIndex */}
              <hr className="absolute top-0 left-0 right-0 border-2 border-gray-200" />
              <hr
                className="absolute top-0 left-0 border-none h-1 bg-gradient-to-r from-green-500 to-green-600 transition-all duration-2000"
                style={{
                  width: `${(activeSectionIndex * 100) / (sections.length - 1)}%`,
                }}
              />

              {/*section navigation*/}
              <div className="flex justify-between items-center mb-6 border-b border-gray-300 py-1">
                <div className="flex items-center gap-2">
                  <TemplateSelector
                    selectedTemplate={resumeData.template}
                    onChange={(template) =>
                      setResumeData((prev) => ({ ...prev, template }))
                    }
                  />
                  <ColorPicker
                    selectedColor={resumeData.accent_color}
                    onChange={(color) =>
                      setResumeData((prev) => ({ ...prev, accent_color: color }))
                    }
                  />
                </div>
                <div className="flex items-center">
                  {activeSectionIndex != 0 && (
                    <button
                      className="flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all"
                      disabled={activeSectionIndex === 0}
                      onClick={() =>
                        setActiveSectionIndex((prev) => Math.max(prev - 1, 0))
                      }
                    >
                      <ChevronLeft className="size-4" />
                      Previous
                    </button>
                  )}
                  <button
                    className={`flex items-center gap-1 p-3 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 transition-all ${
                      activeSectionIndex === sections.length - 1 &&
                      "cursor-not-allowed opacity-50"
                    }`}
                    disabled={activeSectionIndex === sections.length - 1}
                    onClick={() =>
                      setActiveSectionIndex((prev) =>
                        Math.min(prev + 1, sections.length - 1)
                      )
                    }
                  >
                    Next <ChevronRight className="size-4" />
                  </button>
                </div>
              </div>

              {/*formContent*/}
              <div className="space-y-6">
                {activeSection.id === "personal" && (
                  <PersonalInfoForm
                    data={resumeData.personal_info}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        personal_info: {
                          ...prev.personal_info,
                          ...data,
                        },
                      }))
                    }
                  />
                )}
                {activeSection.id === "summary" && (
                  <ProfessionalSummaryForm
                    data={resumeData.professional_summary}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        professional_summary: data,
                      }))
                    }
                    setResumeData={setResumeData}
                  />
                )}
                {activeSection.id === "experience" && (
                  <ExperienceForm
                    data={resumeData.experience}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        experience: data,
                      }))
                    }
                  />
                )}
                {activeSection.id === "education" && (
                  <EducationForm
                    data={resumeData.education}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        education: data,
                      }))
                    }
                  />
                )}
                {activeSection.id === "projects" && (
                  <ProjectForm
                    data={resumeData.project}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        project: data,
                      }))
                    }
                  />
                )}
                {activeSection.id === "skills" && (
                  <SkillsForm
                    data={resumeData.skills}
                    onChange={(data) =>
                      setResumeData((prev) => ({
                        ...prev,
                        skills: data,
                      }))
                    }
                  />
                )}
              </div>
              <button
                onClick={saveResume}
                className="w-full bg-gradient-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all mt-6 rounded p-2 font-semibold"
              >
                Save Changes
              </button>
            </div>
          </div>

          {/*right panel-preview*/}
<div className="lg:col-span-7 max-lg:mt-6">

  <div className="relative w-full  print:p-0 print:shadow-none">

    {/* ✅ TOP RIGHT BUTTONS */}
    <div className="absolute top-2 right-2 flex gap-2 z-10 print:hidden">

      {resumeData.public && (
        <button
          onClick={handleShare}
          className="flex items-center p-2 px-3 gap-1 text-xs bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-lg hover:shadow"
        >
          <Share2Icon className="size-4" />
          Share
        </button>
      )}

      <button
        onClick={changeResumeVisibility}
        className="flex items-center p-2 px-3 gap-1 text-xs bg-gradient-to-br from-purple-100 to-purple-200 text-purple-600 rounded-lg hover:shadow"
      >
        {resumeData.public ? (
          <EyeIcon className="size-4" />
        ) : (
          <EyeOffIcon className="size-4" />
        )}
        {resumeData.public ? "Public" : "Private"}
      </button>

      <button
        onClick={downloadResume}
        className="flex items-center p-2 px-3 gap-1 text-xs bg-gradient-to-br from-green-100 to-green-200 text-green-600 rounded-lg hover:shadow"
      >
        <DownloadIcon className="size-4" />
        Download
      </button>

    </div>

    {/* RESUME PREVIEW */}
    <div className="print-area">
  <ResumePreview
    data={resumeData}
    template={resumeData.template}
    accentColor={resumeData.accent_color}
  />
</div>

  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
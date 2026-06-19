import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import ResumePreview from '../components/ResumePreview';
import { ArrowLeftIcon, Loader } from 'lucide-react';
import api from '../configs/api';

const Preview = () => {
  const {resumeId}=useParams()
   const [isLoading,setisLoading]=useState(true);
  const [resumeData,setResumeData]=useState(null);
  const loadResume=async()=>
  {
    try {
      const { data } = await api.get(`/api/resumes/public/${resumeId}`);
      if (data.resume) {
        const resume = data.resume;
        resume.project = resume.projects || resume.project || [];
        resume.experience = resume.experience || [];
        resume.education = resume.education || [];
        resume.skills = resume.skills || [];
        setResumeData(resume);
        setisLoading(false);
        return;
      }
    } catch (error) {
      console.log("Could not load public resume from API:", error.message);
    }

    const fallback = dummyResumeData.find(resume=>resume._id===resumeId);
    if (fallback) {
      const resumeCopy = { ...fallback };
      resumeCopy.project = resumeCopy.projects || resumeCopy.project || [];
      resumeCopy.experience = resumeCopy.experience || [];
      resumeCopy.education = resumeCopy.education || [];
      resumeCopy.skills = resumeCopy.skills || [];
      setResumeData(resumeCopy);
    } else {
      setResumeData(null);
    }
    setisLoading(false);
  }

  useEffect(()=>
  {
    loadResume()
  },[])
   
  return resumeData? (
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color || resumeData.accentColor} className="py-4 bg-white"/>
      </div>
    </div>
  ):(
    <div>
     {isLoading ?<Loader></Loader>:(
      <div className='flex flex-col items-center justify-center h-screen'>
        <p className='text-center text-6xl text-slate-400 front-medium'>Resume Not Found</p>
        <a href="/" className='mt-6 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-green-400 flex items-center transition-colors'><ArrowLeftIcon className="mr-2 size-4"/>
        Go to home page</a>
      </div>
     )}
    </div>
  )
}

export default Preview

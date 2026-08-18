# SnapResume 📄

**An AI-assisted resume builder — pick a template, fill in your details, and let AI sharpen your summary and job descriptions.**

🔗 **Live app:** [snap-resume-mazt.onrender.com]((https://snap-resume-xi.vercel.app/))

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)
![Node.js](https://img.shields.io/badge/Node.js-Express%205-339933?logo=nodedotjs&logoColor=fff)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=fff)
![OpenAI](https://img.shields.io/badge/AI-OpenAI-412991?logo=openai&logoColor=fff)
![Deployed](https://img.shields.io/badge/Deployed-Render-46E3B7?logo=render&logoColor=fff)

---

## About

**SnapResume** is a full-stack MERN application for building professional resumes. Users create an account, fill in personal info, experience, education, skills, and projects through a guided form, choose from multiple templates, and export a polished resume — with AI assistance to improve their professional summary and job descriptions along the way.

## Features

- **Multiple Resume Templates** — Classic, Modern, Minimal, and Minimal-with-Image layouts, each with a live preview
- **AI-Enhanced Writing** — uses the OpenAI API to rewrite and strengthen professional summaries and job descriptions
- **Resume Parsing** — upload an existing resume and extract its content automatically (via `react-pdftotext` + AI parsing)
- **Image Uploads** — profile photo upload and hosting via ImageKit, with optional background removal
- **Custom Accent Colors** — personalize each resume's color theme
- **Public Share Links** — publish a resume publicly and share it via a unique link
- **Authentication** — secure signup/login with JWT and bcrypt-hashed passwords
- **Dashboard** — manage, edit, and delete multiple saved resumes per user

## Tech Stack

**Frontend**
- React 19 + Vite
- Redux Toolkit for state management
- Tailwind CSS
- Framer Motion, React Hot Toast

**Backend**
- Node.js + Express 5
- MongoDB + Mongoose
- JWT authentication with bcrypt
- Multer for file uploads
- ImageKit for image hosting
- OpenAI API for AI writing assistance

**Deployment**
- Single Render deployment — Express serves the built React app and the REST API from one service

## Architecture

```
Client (React + Redux)  →  REST API (Express)  →  Mongoose  →  MongoDB
                                   ↓                    ↓
                             OpenAI API           ImageKit (images)
```

Three main resources: `users`, `resumes`, and `ai` — each with dedicated routes and controllers. Resumes are stored as nested documents (personal info, experience, education, skills, and projects all live inside a single `Resume` document per user).

## Getting Started

**Prerequisites:** Node.js 18+, MongoDB instance, OpenAI API key, ImageKit account

```bash
# clone
git clone https://github.com/Diyajain3/SnapResume.git
cd SnapResume

# server
cd server
npm install
# add MONGODB_URI, JWT_SECRET, OPENAI_API_KEY, IMAGEKIT credentials to .env
npm run dev

# client (in a new terminal)
cd ../client
npm install
npm run dev
```

## API Overview

| Endpoint | Method | Description |
|---|---|---|
| `/api/users/register` | POST | Create a new account |
| `/api/users/login` | POST | Log in and receive a JWT |
| `/api/resumes/create` | POST | Create a new resume |
| `/api/resumes/update` | PUT | Update resume content / upload photo |
| `/api/resumes/get/:id` | GET | Fetch a resume (owner only) |
| `/api/resumes/public/:id` | GET | Fetch a publicly shared resume |
| `/api/ai/enhance-pro-sum` | POST | AI-enhance the professional summary |
| `/api/ai/enhance-job-desc` | POST | AI-enhance a job description |
| `/api/ai/upload-resume` | POST | Parse an uploaded resume into structured data |

## Project Structure

```
SnapResume/
├── client/
│   └── src/
│       ├── components/templates/   # Classic, Modern, Minimal templates
│       ├── pages/                  # Dashboard, ResumeBuilder, Preview, Login
│       └── app/features/authSlice.js
└── server/
    ├── controllers/                # user, resume, ai
    ├── models/                     # User, Resume
    ├── routes/
    └── configs/                    # db, ai, imageKit, multer
```

## Roadmap

- [ ] Export to PDF directly from the browser (currently server-assisted)
- [ ] More template options
- [ ] LinkedIn profile import

## Author

**Diya Jain** — [GitHub](https://github.com/Diyajain3)

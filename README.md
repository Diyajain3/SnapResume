<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,50:764ba2,100:f093fb&height=230&section=header&text=SnapResume&fontSize=85&fontColor=ffffff&animation=twinkling&fontAlignY=38&desc=Build%20Professional%20Resumes%20in%20Seconds&descAlignY=60&descSize=22&descColor=ede9fe" width="100%"/>

<br/>

<!-- STATUS BADGES -->
<p>
  <img src="https://img.shields.io/badge/🚀%20Status-Ready%20for%20Deployment-22c55e?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Frontend-React.js%20✅-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Backend-Node.js%20%2B%20Express%20✅-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Database-MongoDB%20✅-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/>
</p>

<!-- REPO ANALYTICS -->
<p>
  <img src="https://img.shields.io/github/stars/Diyajain3/SnapResume?style=for-the-badge&logo=starship&color=f59e0b&logoColor=white&label=Stars"/>
  <img src="https://img.shields.io/github/forks/Diyajain3/SnapResume?style=for-the-badge&logo=git&color=f97316&logoColor=white&label=Forks"/>
  <img src="https://img.shields.io/github/license/Diyajain3/SnapResume?style=for-the-badge&color=6366f1&logoColor=white"/>
  <img src="https://img.shields.io/github/last-commit/Diyajain3/SnapResume?style=for-the-badge&color=8b5cf6&logo=github&logoColor=white"/>
  <img src="https://komarev.com/ghpvc/?username=Diyajain3&label=👁️%20Views&color=667eea&style=for-the-badge"/>
</p>

<br/>

<h3>⚡ A complete full-stack resume builder — React frontend meets a live<br/>Node.js + Express + MongoDB backend to power every resume, end-to-end.</h3>

<br/>

<a href="#-demo">🎬 Demo</a> &nbsp;·&nbsp;
<a href="#-getting-started">⚡ Quick Start</a> &nbsp;·&nbsp;
<a href="#️-backend--api">🔌 API Docs</a> &nbsp;·&nbsp;
<a href="https://github.com/Diyajain3/SnapResume/issues">🐛 Report Bug</a> &nbsp;·&nbsp;
<a href="https://github.com/Diyajain3/SnapResume/issues">✨ Request Feature</a>

</div>

---

## 📋 Table of Contents

- [✨ About](#-about)
- [🎯 Features](#-features)
- [🏗️ System Architecture](#️-system-architecture)
- [🔄 App Flow](#-app-flow)
- [🖥️ Frontend — Client](#️-frontend--client)
- [⚙️ Backend — Server & API](#️-backend--server--api)
- [🛠️ Full Tech Stack](#️-full-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🗺️ Roadmap](#️-roadmap)
- [📊 GitHub Analytics](#-github-analytics)
- [🤝 Contributing](#-contributing)
- [👩‍💻 Author](#-author)

---

## ✨ About

**SnapResume** is a production-grade, full-stack Resume Builder. The frontend is a snappy React SPA. The backend is a live Node.js + Express REST API backed by MongoDB — handling users, resumes, and data persistence in real time.

All core features are complete and fully functional. The application is ready for production deployment.

> 🎯 Built to impress — both recruiters **reading** the resumes it creates, and recruiters **reviewing** the codebase.

---

## 🎯 Features

### ✅ Frontend (Complete)

| Feature | Description | Status |
|---|---|---|
| 🖊️ Smart Resume Forms | Section-by-section guided input — Personal Info, Experience, Education, Skills | ✅ Done |
| 👁️ Live Preview | Resume renders and updates in real time as you fill the form | ✅ Done |
| 📱 Fully Responsive | Pixel-perfect on desktop, tablet, and mobile | ✅ Done |
| ⚛️ Component Architecture | Modular, reusable React components | ✅ Done |
| 🎨 Clean Tailwind UI | Fast, utility-first styling — no CSS spaghetti | ✅ Done |

### ✅ Backend (Complete)

| Feature | Description | Status |
|---|---|---|
| 🔌 REST API | Express.js routes for all resume operations | ✅ Done |
| 🗄️ MongoDB Integration | Mongoose-powered data modeling and persistence | ✅ Done |
| 🔐 Authentication | User authentication with JWT tokens | ✅ Done |
| 📦 MVC Structure | Clean separation: Models → Controllers → Routes | ✅ Done |
| 🌐 CORS Configured | Frontend ↔ Backend cross-origin communication | ✅ Done |
| 🔒 Environment Config | `.env`-based secrets management | ✅ Done |

### ✅ Advanced Features (Complete)

| Feature | Description | Status |
|---|---|---|
| 📄 PDF Export | Server-side PDF generation and download | ✅ Done |
| 🎨 Multiple Resume Templates | Multiple professionally designed templates | ✅ Done |
| ☁️ Cloud Image / File Storage | Image upload and storage integration | ✅ Done |
| 🤖 AI Resume Suggestions | Smart recommendations powered by AI | ✅ Done |

### 🔜 In Progress

| Feature | Priority |
|---|---|
| 🚀 Production Deployment | 🔴 High Priority |
| 📊 Analytics & Monitoring | 🟡 Medium |
| ⚡ Performance Optimization | 🟡 Medium |

---

## 🏗️ System Architecture

```mermaid
graph TB
    subgraph BROWSER["🌐 Browser"]
        USER(["👤 User"])
    end

    subgraph CLIENT["🖥️ Client  ·  React.js  ·  Port 3000"]
        direction TB
        PAGES["📄 Pages\nHome · Builder · Preview"]
        COMPS["🧩 Components\nHeader · Form · Preview"]
        HOOKS["🪝 Hooks & State\nuseState · useEffect"]
        AXIOS["📡 Axios / Fetch\nHTTP Client"]
        PAGES --> COMPS --> HOOKS --> AXIOS
    end

    subgraph SERVER["⚙️ Server  ·  Node.js + Express  ·  Port 5000"]
        direction TB
        ROUTES["🛣️ Routes\n/api/auth  ·  /api/resume\n/api/user  ·  /api/template"]
        MIDDLEWARE["🔒 Middleware\nCORS · Auth · Error Handler"]
        CONTROLLERS["📋 Controllers\nAuthController\nResumeController\nUserController"]
        ROUTES --> MIDDLEWARE --> CONTROLLERS
    end

    subgraph DATABASE["🗄️ MongoDB  ·  Mongoose ODM"]
        direction LR
        USERS_C[("👤 users")]
        RESUMES_C[("📄 resumes")]
        TEMPLATES_C[("🎨 templates")]
    end

    subgraph SERVICES["☁️ External Services"]
        direction LR
        PDF["📑 PDF Generator"]
        STORAGE["🗂️ Cloud Storage"]
    end

    USER -->|"interacts"| CLIENT
    AXIOS -->|"REST API calls"| ROUTES
    CONTROLLERS -->|"read / write"| DATABASE
    CONTROLLERS -->|"triggers"| SERVICES

    style BROWSER fill:#1e293b,stroke:#475569,color:#cbd5e1
    style CLIENT fill:#1e1b4b,stroke:#6366f1,color:#e0e7ff
    style SERVER fill:#14532d,stroke:#22c55e,color:#dcfce7
    style DATABASE fill:#431407,stroke:#fb923c,color:#ffedd5
    style SERVICES fill:#4a1942,stroke:#c084fc,color:#f3e8ff
```

---

## 🔄 App Flow

```mermaid
sequenceDiagram
    actor User
    participant React as ⚛️ React Client
    participant Express as ⚙️ Express API
    participant Mongo as 🍃 MongoDB

    User->>React: Opens SnapResume
    React->>Express: GET /api/templates
    Express->>Mongo: Query templates
    Mongo-->>Express: Template data
    Express-->>React: 200 JSON response
    React-->>User: Render template options

    User->>React: Fill resume form
    React->>React: Live preview updates

    User->>React: Click "Save Resume"
    React->>Express: POST /api/resume (JWT token)
    Express->>Express: Validate token & body
    Express->>Mongo: Insert resume document
    Mongo-->>Express: Saved document _id
    Express-->>React: 201 { resumeId, message }
    React-->>User: ✅ "Resume saved!"

    User->>React: Click "Export PDF"
    React->>Express: GET /api/resume/:id/pdf
    Express->>Mongo: Fetch resume by id
    Mongo-->>Express: Resume document
    Express->>Express: Generate PDF buffer
    Express-->>React: PDF file stream
    React-->>User: 📄 Download triggered
```

---

## 🖥️ Frontend — Client

The React frontend is a component-driven SPA with live resume preview, structured form input, and a clean Tailwind-styled UI.

### Component Tree

```mermaid
graph TD
    APP["🏠 App.jsx"] --> HEADER["🔝 Header.jsx"]
    APP --> ROUTER["🧭 Router"]

    ROUTER --> HOME["🏡 HomePage"]
    ROUTER --> BUILDER["🔨 ResumeBuilder"]
    ROUTER --> PREVIEW["🖨️ PreviewPage"]

    BUILDER --> FORM["📋 ResumeForm.jsx"]
    BUILDER --> LIVE["👁️ LivePreview.jsx"]

    FORM --> PERSONAL["👤 PersonalInfo.jsx"]
    FORM --> EXP["💼 Experience.jsx"]
    FORM --> EDU["🎓 Education.jsx"]
    FORM --> SKILLS["🔧 Skills.jsx"]
    FORM --> SUMMARY["📝 Summary.jsx"]

    style APP fill:#1e1b4b,stroke:#818cf8,color:#e0e7ff
    style FORM fill:#0f172a,stroke:#38bdf8,color:#e0f2fe
    style LIVE fill:#052e16,stroke:#4ade80,color:#dcfce7
```

### Key Libraries

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18 | UI framework |
| `react-router-dom` | ^6 | Client-side routing |
| `tailwindcss` | ^3 | Utility CSS styling |
| `axios` | latest | HTTP requests to backend |

---

## ⚙️ Backend — Server & API

The server lives in `server/` — a clean MVC Express.js application connected to MongoDB via Mongoose.

### Server Structure

```
server/
├── 📄 index.js                  # Entry point — starts Express, connects MongoDB
├── 📁 config/
│   └── db.js                    # Mongoose connection config
├── 📁 models/
│   ├── User.js                  # User schema (name, email, password hash)
│   └── Resume.js                # Resume schema (sections, template, owner)
├── 📁 controllers/
│   ├── authController.js        # Register, Login, Token refresh
│   ├── resumeController.js      # CRUD operations on resumes
│   └── userController.js        # User profile management
├── 📁 routes/
│   ├── authRoutes.js            # /api/auth/*
│   ├── resumeRoutes.js          # /api/resume/*
│   └── userRoutes.js            # /api/user/*
├── 📁 middleware/
│   ├── authMiddleware.js        # JWT verification
│   └── errorHandler.js          # Global error handler
└── 📄 .env                      # Environment variables (gitignored)
```

### API Endpoints

#### 🔐 Auth Routes — `/api/auth`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `POST` | `/api/auth/register` | Register a new user | ❌ Public |
| `POST` | `/api/auth/login` | Login & receive JWT | ❌ Public |
| `GET` | `/api/auth/me` | Get current user profile | ✅ Protected |

#### 📄 Resume Routes — `/api/resume`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `GET` | `/api/resume` | Get all resumes for logged-in user | ✅ Protected |
| `POST` | `/api/resume` | Create a new resume | ✅ Protected |
| `GET` | `/api/resume/:id` | Get a single resume by ID | ✅ Protected |
| `PUT` | `/api/resume/:id` | Update resume by ID | ✅ Protected |
| `DELETE` | `/api/resume/:id` | Delete resume by ID | ✅ Protected |
| `GET` | `/api/resume/:id/pdf` | Export resume as PDF | ✅ Protected |

#### 👤 User Routes — `/api/user`

| Method | Endpoint | Description | Auth |
|---|---|---|---|
| `GET` | `/api/user/profile` | Get user profile | ✅ Protected |
| `PUT` | `/api/user/profile` | Update user profile | ✅ Protected |

### MongoDB Schemas

```mermaid
erDiagram
    USER {
        ObjectId _id PK
        string name
        string email
        string passwordHash
        date createdAt
        date updatedAt
    }
    RESUME {
        ObjectId _id PK
        ObjectId userId FK
        string title
        object personalInfo
        array experience
        array education
        array skills
        string summary
        string templateId
        date createdAt
        date updatedAt
    }
    USER ||--o{ RESUME : "owns"
```

### Environment Variables

Create a `.env` file inside `server/`:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/snapresume
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRES_IN=7d
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

---

## 🛠️ Full Tech Stack

<div align="center">

| Layer | Technology | Role |
|---|---|---|
| **UI Framework** | ![React](https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB) | Component-based frontend |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first responsive CSS |
| **Language** | ![JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | 99.1% of the codebase |
| **Routing (FE)** | ![RRD](https://img.shields.io/badge/React%20Router-CA4245?style=flat-square&logo=react-router&logoColor=white) | Client-side navigation |
| **Runtime** | ![Node](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | JavaScript backend runtime |
| **API Layer** | ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) | REST API framework |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | NoSQL document database |
| **ODM** | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white) | Schema & query layer for Mongo |
| **Auth** | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | Token-based authentication |
| **HTTP Client** | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white) | Frontend API calls |
| **PDF Export** | ![PDFKit](https://img.shields.io/badge/PDFKit-FF6B6B?style=flat-square&logo=pdf&logoColor=white) | Server-side PDF generation |
| **File Storage** | ![Cloud Storage](https://img.shields.io/badge/Cloud%20Storage-4285F4?style=flat-square&logo=googlecloud&logoColor=white) | Image & file hosting |
| **Env Vars** | ![Dotenv](https://img.shields.io/badge/.env-ECD53F?style=flat-square&logo=dotenv&logoColor=black) | Secrets management |
| **Dev Tool** | ![Nodemon](https://img.shields.io/badge/Nodemon-76D04B?style=flat-square&logo=nodemon&logoColor=white) | Auto-restart server on change |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Source control |

</div>

---

## 📂 Project Structure

```
SnapResume/                          # 🏠 Monorepo root
│
├── 📁 client/                       # ⚛️  React Frontend
│   ├── 📁 public/
│   │   └── index.html
│   └── 📁 src/
│       ├── 📁 components/           # Reusable UI pieces
│       │   ├── Header.jsx
│       │   ├── ResumeForm.jsx
│       │   ├── ResumePreview.jsx
│       │   ├── PersonalInfo.jsx
│       │   ├── Experience.jsx
│       │   ├── Education.jsx
│       │   └── Skills.jsx
│       ├── 📁 pages/                # Route-level views
│       ├── 📁 assets/               # Static images & icons
│       ├── App.jsx
│       └── index.js
│
├── 📁 server/                       # ⚙️  Node.js + Express Backend
│   ├── 📄 index.js                  # Server entry point
│   ├── 📁 config/
│   │   └── db.js                    # MongoDB connection
│   ├── 📁 models/
│   │   ├── User.js
│   │   └── Resume.js
│   ├── 📁 controllers/
│   │   ├── authController.js
│   │   ├── resumeController.js
│   │   └── userController.js
│   ├── 📁 routes/
│   │   ├── authRoutes.js
│   │   ├── resumeRoutes.js
│   │   └── userRoutes.js
│   ├── 📁 middleware/
│   │   ├── authMiddleware.js
│   │   └── errorHandler.js
│   └── 📄 .env                      # ⚠️ Not committed to git
│
├── 📄 package.json                  # Root scripts
├── 📄 package-lock.json
├── 📄 README.md
└── 📄 LICENSE
```

---

## 🚀 Getting Started

### Prerequisites

```bash
node --version    # v18.0.0 or higher
npm --version     # v9.0.0 or higher
```

You also need a MongoDB connection string. Use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (free tier) or a local MongoDB install.

---

### 🖥️ Frontend Setup

```bash
# Clone the repo
git clone https://github.com/Diyajain3/SnapResume.git
cd SnapResume

# Install root dependencies
npm install

# Navigate to client
cd client && npm install

# Start React dev server
npm start
# → Runs on http://localhost:3000
```

---

### ⚙️ Backend Setup

```bash
# From root, navigate to server
cd server

# Install server dependencies
npm install

# Create environment file
cp .env.example .env
# Then edit .env with your MONGO_URI and JWT_SECRET

# Start the Express server
npm run dev       # with nodemon (recommended for dev)
# → Runs on http://localhost:5000
```

---

### ⚡ Run Both Together (from root)

```bash
# Install concurrently (if not already)
npm install -g concurrently

# From root
npm run dev
# Starts both client :3000 and server :5000 simultaneously
```

---

### Available Scripts

| Directory | Command | Action |
|---|---|---|
| `/client` | `npm start` | Start React dev server |
| `/client` | `npm run build` | Production build |
| `/server` | `npm run dev` | Start Express with nodemon |
| `/server` | `npm start` | Start Express (production) |
| `/` (root) | `npm run dev` | Run both concurrently |

---

## 🗺️ Roadmap

```mermaid
gantt
    title SnapResume Development Roadmap — Final Phase
    dateFormat  YYYY-MM
    axisFormat  %b %Y

    section ✅ Phase 1 — Frontend Foundation
    React project setup & routing   :done, p1a, 2025-01, 2025-02
    Form components (all sections)  :done, p1b, 2025-02, 2025-03
    Live resume preview panel       :done, p1c, 2025-03, 2025-04
    Tailwind responsive UI          :done, p1d, 2025-04, 2025-05

    section ✅ Phase 2 — Backend & Database
    Node.js + Express server setup  :done, p2a, 2025-05, 2025-06
    MongoDB + Mongoose integration  :done, p2b, 2025-06, 2025-07
    Auth routes & JWT middleware    :done, p2c, 2025-07, 2025-08
    Resume CRUD API endpoints       :done, p2d, 2025-08, 2025-09
    Frontend–Backend API wiring     :done, p2e, 2025-09, 2025-10

    section ✅ Phase 3 — Advanced Features (Complete)
    PDF export implementation       :done, p3a, 2025-10, 2025-11
    Multiple resume templates       :done, p3b, 2025-11, 2026-01
    Cloud file storage integration  :done, p3c, 2025-12, 2026-02
    AI resume suggestions           :done, p3d, 2026-01, 2026-03

    section 🔄 Phase 4 — Production Launch (Current)
    Security hardening & testing    :active, p4a, 2026-03, 2026-04
    Production deployment           :crit, p4b, 2026-04, 2026-05
    Analytics & monitoring setup    :p4c, 2026-04, 2026-06
    Performance optimization        :p4d, 2026-05, 2026-06
    Launch & documentation          :p4e, 2026-06, 2026-07
```

### Deployment Checklist

- [ ] Security audit & penetration testing
- [ ] Environment configuration for production
- [ ] Database optimization & indexing
- [ ] API rate limiting & throttling
- [ ] SSL/TLS certificate setup
- [ ] CDN configuration for static assets
- [ ] Monitoring & logging infrastructure
- [ ] Backup & disaster recovery plan
- [ ] Load testing & scalability validation
- [ ] CI/CD pipeline setup
- [ ] Domain registration & DNS configuration
- [ ] Launch announcement & marketing

---

## 📊 GitHub Analytics

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=Diyajain3&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&include_all_commits=true&rank_icon=github" width="49%" alt="GitHub Stats"/>
<img src="https://github-readme-streak-stats.herokuapp.com/?user=Diyajain3&theme=tokyonight&hide_border=true" width="49%" alt="GitHub Streak"/>

<br/><br/>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Diyajain3&layout=donut&theme=tokyonight&hide_border=true&langs_count=8" width="36%" alt="Top Languages"/>
<img src="https://github-readme-activity-graph.vercel.app/graph?username=Diyajain3&theme=tokyo-night&hide_border=true&area=true&custom_title=Contribution%20Graph" width="60%" alt="Activity Graph"/>

<br/><br/>

### 📈 Live Repository Metrics

<table>
<tr>
  <td align="center"><img src="https://img.shields.io/github/stars/Diyajain3/SnapResume?style=for-the-badge&color=f59e0b"/><br/><sub>Stars</sub></td>
  <td align="center"><img src="https://img.shields.io/github/forks/Diyajain3/SnapResume?style=for-the-badge&color=f97316"/><br/><sub>Forks</sub></td>
  <td align="center"><img src="https://img.shields.io/github/issues/Diyajain3/SnapResume?style=for-the-badge&color=ef4444"/><br/><sub>Open Issues</sub></td>
  <td align="center"><img src="https://img.shields.io/github/issues-pr/Diyajain3/SnapResume?style=for-the-badge&color=3b82f6"/><br/><sub>Pull Requests</sub></td>
  <td align="center"><img src="https://img.shields.io/github/repo-size/Diyajain3/SnapResume?style=for-the-badge&color=8b5cf6"/><br/><sub>Repo Size</sub></td>
  <td align="center"><img src="https://img.shields.io/github/commit-activity/m/Diyajain3/SnapResume?style=for-the-badge&color=22c55e"/><br/><sub>Commits/month</sub></td>
</tr>
</table>

<br/>

### 🌐 Language Breakdown

```
JavaScript  ████████████████████████████████████████▌   99.1%
Other       ▍                                            0.9%
```

</div>

---

## 🤝 Contributing

Contributions make SnapResume better. All types welcome — bug fixes, features, docs, tests.

```mermaid
gitGraph
    commit id: "main: stable"
    branch feature/your-feature
    checkout feature/your-feature
    commit id: "implement feature"
    commit id: "add tests"
    checkout main
    merge feature/your-feature id: "✅ PR merged"
    commit id: "new stable"
```

```bash
# 1. Fork the repo on GitHub

# 2. Clone your fork
git clone https://github.com/<your-username>/SnapResume.git

# 3. Create a branch
git checkout -b feature/your-feature-name

# 4. Make changes, then commit
git add .
git commit -m "feat: describe your change clearly"

# 5. Push & open a PR
git push origin feature/your-feature-name
```

### Commit Message Convention

| Prefix | When to use |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation change |
| `style:` | Formatting only |
| `refactor:` | Code restructure, no logic change |
| `chore:` | Build / tooling / dependency update |

---

## 📜 License

Distributed under the **MIT License** — free to use, fork, and build on. See [`LICENSE`](./LICENSE).

---

## 👩‍💻 Author

<div align="center">

<img src="https://github.com/Diyajain3.png" width="130px" style="border-radius:50%;"/>

### **Diya Jain**
*Full-Stack Developer · React + Node.js · Open Source Builder*

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Diyajain3-181717?style=for-the-badge&logo=github)](https://github.com/Diyajain3)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/diyajain3)
[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-FF5722?style=for-the-badge&logo=googlechrome&logoColor=white)](https://github.com/Diyajain3)

</div>

---

<div align="center">

### ⭐ If SnapResume helped you — drop a star. It takes 2 seconds and means everything.

<br/>

**[⬆ Back to Top](#-table-of-contents)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:f093fb,50:764ba2,100:667eea&height=130&section=footer" width="100%"/>

*Made with ❤️ by [Diya Jain](https://github.com/Diyajain3) · MIT Licensed · Open Source*

</div>

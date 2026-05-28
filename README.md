<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:667eea,100:764ba2&height=220&section=header&text=SnapResume&fontSize=80&fontColor=ffffff&animation=twinkling&fontAlignY=38&desc=Build%20Professional%20Resumes%20in%20Seconds&descAlignY=60&descSize=22&descColor=e0d7ff" width="100%"/>

<br/>

<!-- STATUS BADGES -->
<p>
  <img src="https://img.shields.io/badge/Status-Active%20Development-22c55e?style=for-the-badge&logo=statuspage&logoColor=white"/>
  <img src="https://img.shields.io/github/license/Diyajain3/SnapResume?style=for-the-badge&color=6366f1&logo=opensourceinitiative&logoColor=white"/>
  <img src="https://img.shields.io/github/stars/Diyajain3/SnapResume?style=for-the-badge&logo=starship&color=f59e0b&logoColor=white"/>
  <img src="https://img.shields.io/github/forks/Diyajain3/SnapResume?style=for-the-badge&logo=git&color=f97316&logoColor=white"/>
  <img src="https://img.shields.io/github/last-commit/Diyajain3/SnapResume?style=for-the-badge&color=8b5cf6&logo=github&logoColor=white"/>
</p>

<!-- TECH BADGES -->
<p>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/JavaScript-99.1%25-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
</p>

<!-- ANALYTICS BADGES -->
<p>
  <img src="https://komarev.com/ghpvc/?username=Diyajain3&label=👁️%20Profile%20Views&color=667eea&style=for-the-badge"/>
  <img src="https://img.shields.io/github/repo-size/Diyajain3/SnapResume?style=for-the-badge&logo=databricks&color=ec4899&logoColor=white&label=Repo%20Size"/>
  <img src="https://img.shields.io/github/languages/top/Diyajain3/SnapResume?style=for-the-badge&color=f59e0b&label=Top%20Language"/>
</p>

<br/>

<h3>
  ⚡ A sleek, full-stack resume builder that helps job seekers craft<br/>
  ATS-friendly, recruiter-approved resumes — in seconds, not hours.
</h3>

<br/>

<a href="#-demo">View Demo</a> · <a href="#-getting-started">Quick Start</a> · <a href="https://github.com/Diyajain3/SnapResume/issues">Report Bug</a> · <a href="https://github.com/Diyajain3/SnapResume/issues">Request Feature</a>

</div>

---

## 📋 Table of Contents

- [✨ About](#-about)
- [🎯 Features](#-features)
- [🏗️ Architecture](#️-architecture)
- [🔄 App Flow](#-app-flow)
- [🛠️ Tech Stack](#️-tech-stack)
- [📂 Project Structure](#-project-structure)
- [🚀 Getting Started](#-getting-started)
- [🗺️ Roadmap](#️-roadmap)
- [📊 GitHub Analytics](#-github-analytics)
- [🤝 Contributing](#-contributing)
- [👩‍💻 Author](#-author)

---

## ✨ About

**SnapResume** is a modern, full-stack Resume Builder application that removes every friction point between a job seeker and their perfect resume.

Whether you're a fresh graduate landing your first role or an experienced professional pivoting industries — SnapResume gives you:

- 🧩 **Guided, form-based input** for every resume section
- 👁️ **Real-time live preview** — see changes as you type
- 🎯 **ATS-optimized layouts** that pass automated screening
- 📱 **Fully responsive** — works beautifully on every device
- ⚡ **Zero friction** — no account needed to get started

> 💡 **Why SnapResume?** Most resume builders are bloated, slow, or lock key features behind paywalls. SnapResume is built developer-first — fast, open, and extensible.

---

## 🎯 Features

### ✅ Currently Live

| Feature | Description | Status |
|---|---|---|
| 🖊️ Smart Resume Forms | Structured input for all sections — personal, experience, education, skills | ✅ Live |
| 👁️ Live Preview | Resume updates instantly as you type | ✅ Live |
| ⚛️ Component Architecture | Modular, reusable React components | ✅ Live |
| 📱 Responsive Design | Pixel-perfect on desktop, tablet, and mobile | ✅ Live |
| 🎨 Clean Modern UI | Tailwind CSS powered, distraction-free interface | ✅ Live |

### 🔜 Upcoming Features

| Feature | Version | Priority |
|---|---|---|
| 🔐 JWT User Authentication | v2.0 | 🔴 High |
| 💾 Save & Manage Resumes | v2.0 | 🔴 High |
| 📄 Export to PDF | v2.1 | 🔴 High |
| 🎨 Multiple Resume Templates | v2.2 | 🟡 Medium |
| ☁️ Cloud Storage | v3.0 | 🟡 Medium |
| 🤖 AI-Powered Suggestions | v3.0 | 🟢 Future |
| 🌐 Deployed Production App | v3.1 | 🟢 Future |

---

## 🏗️ Architecture

```mermaid
graph TB
    subgraph CLIENT["🖥️ Client — React.js Frontend"]
        direction TB
        UI["🎨 UI Layer<br/>Tailwind CSS + React Components"]
        STATE["⚛️ State Management<br/>React Hooks (useState, useEffect)"]
        ROUTER["🧭 Router<br/>React Router DOM"]
        UI --> STATE
        STATE --> ROUTER
    end

    subgraph COMPONENTS["📦 Component Tree"]
        direction TB
        APP["App.jsx"]
        HEADER["Header.jsx"]
        FORM["ResumeForm.jsx"]
        PREVIEW["ResumePreview.jsx"]
        PERSONAL["PersonalInfo.jsx"]
        EXPERIENCE["Experience.jsx"]
        EDUCATION["Education.jsx"]
        SKILLS["Skills.jsx"]

        APP --> HEADER
        APP --> FORM
        APP --> PREVIEW
        FORM --> PERSONAL
        FORM --> EXPERIENCE
        FORM --> EDUCATION
        FORM --> SKILLS
    end

    subgraph BACKEND["⚙️ Backend — Node.js + Express (Planned)"]
        direction TB
        API["🔌 REST API<br/>Express.js Routes"]
        AUTH["🔐 Auth Middleware<br/>JWT + bcrypt"]
        CTRL["📋 Controllers<br/>Resume / User / PDF"]
        API --> AUTH
        AUTH --> CTRL
    end

    subgraph DATABASE["🗄️ Database — MongoDB (Planned)"]
        direction TB
        USERS["👤 Users Collection"]
        RESUMES["📄 Resumes Collection"]
        TEMPLATES["🎨 Templates Collection"]
    end

    subgraph SERVICES["☁️ Services (Planned)"]
        PDFGEN["📑 PDF Generator"]
        STORAGE["🗂️ Cloud Storage"]
        AI["🤖 AI Suggestions"]
    end

    CLIENT --> BACKEND
    COMPONENTS --> CLIENT
    BACKEND --> DATABASE
    BACKEND --> SERVICES

    style CLIENT fill:#1e1b4b,stroke:#6366f1,color:#e0e7ff
    style COMPONENTS fill:#0f172a,stroke:#38bdf8,color:#e0f2fe
    style BACKEND fill:#14532d,stroke:#22c55e,color:#dcfce7
    style DATABASE fill:#431407,stroke:#f97316,color:#ffedd5
    style SERVICES fill:#4a1942,stroke:#a855f7,color:#f3e8ff
```

---

## 🔄 App Flow

```mermaid
flowchart LR
    A([👤 User Visits App]) --> B[🏠 Landing Page]
    B --> C[📝 Resume Form]

    C --> D{Section Input}
    D --> P[👤 Personal Info]
    D --> E[💼 Experience]
    D --> ED[🎓 Education]
    D --> SK[🔧 Skills]

    P --> PREV[👁️ Live Preview]
    E --> PREV
    ED --> PREV
    SK --> PREV

    PREV --> EX{Export Options}
    EX --> PDF[📄 Download PDF]
    EX --> SAV[💾 Save to Cloud]
    EX --> SHR[🔗 Share Link]

    style A fill:#6366f1,color:#fff,stroke:none
    style PREV fill:#0ea5e9,color:#fff,stroke:none
    style PDF fill:#22c55e,color:#fff,stroke:none
    style SAV fill:#f59e0b,color:#fff,stroke:none
    style SHR fill:#ec4899,color:#fff,stroke:none
```

---

## 🛠️ Tech Stack

<div align="center">

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend Framework** | ![React](https://img.shields.io/badge/React.js-20232A?style=flat-square&logo=react&logoColor=61DAFB) | UI rendering & component architecture |
| **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) | Utility-first responsive styling |
| **Language** | ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | 99.1% of codebase |
| **Runtime** | ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | Backend server *(planned)* |
| **API Layer** | ![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white) | REST API routes *(planned)* |
| **Database** | ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white) | NoSQL data persistence *(planned)* |
| **Auth** | ![JWT](https://img.shields.io/badge/JWT-000000?style=flat-square&logo=jsonwebtokens&logoColor=white) | Secure token auth *(planned)* |
| **Package Manager** | ![npm](https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm&logoColor=white) | Dependency management |
| **Version Control** | ![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white) | Source control |

</div>

---

## 📂 Project Structure

```
SnapResume/
│
├── 📁 client/                        # ⚛️  React Frontend Application
│   ├── 📁 public/                    # Static public assets
│   │   └── index.html
│   └── 📁 src/
│       ├── 📁 components/            # 🧩 Reusable UI Components
│       │   ├── Header.jsx            #    App header & navigation
│       │   ├── ResumeForm.jsx        #    Master form wrapper
│       │   ├── ResumePreview.jsx     #    Live resume preview panel
│       │   ├── PersonalInfo.jsx      #    Personal details section
│       │   ├── Experience.jsx        #    Work experience section
│       │   ├── Education.jsx         #    Education section
│       │   └── Skills.jsx            #    Skills & technologies section
│       ├── 📁 pages/                 # 📄 Route-level page components
│       ├── 📁 assets/                # 🖼️  Images, fonts, icons
│       ├── App.jsx                   # 🏠 Root application component
│       └── index.js                  # 🔑 Entry point
│
├── 📁 node_modules/                  # 📦 Dependencies (auto-generated)
├── 📄 package.json                   # Project manifest & scripts
├── 📄 package-lock.json              # Locked dependency tree
├── 📄 README.md                      # Project documentation
└── 📄 LICENSE                        # MIT License
```

---

## 🚀 Getting Started

### Prerequisites

```bash
node --version    # v18.0.0 or higher
npm --version     # v9.0.0 or higher
```

### Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/Diyajain3/SnapResume.git

# 2. Navigate to the project root
cd SnapResume

# 3. Install root dependencies
npm install

# 4. Navigate to the client
cd client

# 5. Install client dependencies
npm install

# 6. Start the development server
npm start
```

🎉 App will be running at **`http://localhost:3000`**

### Available Scripts

| Command | Description |
|---|---|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm test` | Run test suite |

---

## 🗺️ Roadmap

```mermaid
gantt
    title SnapResume Development Timeline
    dateFormat  YYYY-MM
    axisFormat  %b %Y

    section ✅ Phase 1 — Foundation
    Project Scaffolding          :done, p1a, 2025-01, 2025-02
    React Component Architecture :done, p1b, 2025-02, 2025-03
    Responsive UI & Forms        :done, p1c, 2025-03, 2025-04
    Live Resume Preview          :done, p1d, 2025-04, 2025-05

    section 🔄 Phase 2 — Backend Core
    Node.js + Express API Setup  :active, p2a, 2025-05, 2025-07
    MongoDB Schema & Models      :p2b, 2025-06, 2025-08
    JWT User Authentication      :p2c, 2025-07, 2025-09
    Save & Retrieve Resumes      :p2d, 2025-08, 2025-10

    section 📅 Phase 3 — Advanced
    PDF Export Feature           :p3a, 2025-10, 2025-12
    Multiple Resume Templates    :p3b, 2025-11, 2026-01
    Cloud Storage Integration    :p3c, 2025-12, 2026-02

    section 🚀 Phase 4 — Launch
    AI Resume Suggestions        :p4a, 2026-01, 2026-03
    Production Deployment        :p4b, 2026-02, 2026-04
```

---

## 📊 GitHub Analytics

<div align="center">

<img src="https://github-readme-stats.vercel.app/api?username=Diyajain3&show_icons=true&theme=tokyonight&hide_border=true&count_private=true&include_all_commits=true&rank_icon=github&card_width=495" width="49%" alt="GitHub Stats"/>
<img src="https://github-readme-streak-stats.herokuapp.com/?user=Diyajain3&theme=tokyonight&hide_border=true&card_width=495" width="49%" alt="GitHub Streak"/>

<br/><br/>

<img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Diyajain3&layout=donut&theme=tokyonight&hide_border=true&langs_count=8" width="38%" alt="Top Languages"/>
<img src="https://github-readme-activity-graph.vercel.app/graph?username=Diyajain3&theme=tokyo-night&hide_border=true&area=true&custom_title=Contribution%20Activity" width="58%" alt="Activity Graph"/>

<br/><br/>

### 📈 Repository Stats At a Glance

<table>
  <tr>
    <td align="center">
      <img src="https://img.shields.io/github/stars/Diyajain3/SnapResume?style=for-the-badge&color=f59e0b&logo=starship&logoColor=white"/>
      <br/><sub><b>Stars</b></sub>
    </td>
    <td align="center">
      <img src="https://img.shields.io/github/forks/Diyajain3/SnapResume?style=for-the-badge&color=f97316&logo=git&logoColor=white"/>
      <br/><sub><b>Forks</b></sub>
    </td>
    <td align="center">
      <img src="https://img.shields.io/github/issues/Diyajain3/SnapResume?style=for-the-badge&color=ef4444&logo=github&logoColor=white"/>
      <br/><sub><b>Open Issues</b></sub>
    </td>
    <td align="center">
      <img src="https://img.shields.io/github/issues-pr/Diyajain3/SnapResume?style=for-the-badge&color=3b82f6&logo=github&logoColor=white"/>
      <br/><sub><b>Pull Requests</b></sub>
    </td>
    <td align="center">
      <img src="https://img.shields.io/github/repo-size/Diyajain3/SnapResume?style=for-the-badge&color=8b5cf6&logo=databricks&logoColor=white"/>
      <br/><sub><b>Repo Size</b></sub>
    </td>
    <td align="center">
      <img src="https://img.shields.io/github/commit-activity/m/Diyajain3/SnapResume?style=for-the-badge&color=22c55e&logo=git&logoColor=white"/>
      <br/><sub><b>Monthly Commits</b></sub>
    </td>
  </tr>
</table>

<br/>

### 🌐 Language Distribution

```
JavaScript  ████████████████████████████████████████  99.1%
Other       ▌                                          0.9%
```

</div>

---

## 🤝 Contributing

Contributions make this project better! Every bug fix, feature, and improvement is welcome.

```mermaid
gitGraph
    commit id: "Initial commit"
    branch feature/your-feature
    checkout feature/your-feature
    commit id: "Add feature"
    commit id: "Write tests"
    checkout main
    merge feature/your-feature id: "PR merged ✅"
```

### Steps to Contribute

```bash
# 1. Fork the repository on GitHub

# 2. Clone your fork
git clone https://github.com/<your-username>/SnapResume.git

# 3. Create a feature branch
git checkout -b feature/amazing-feature

# 4. Make your changes and commit
git add .
git commit -m "feat: add amazing feature"

# 5. Push to your fork
git push origin feature/amazing-feature

# 6. Open a Pull Request on GitHub 🎉
```

### Commit Convention

| Prefix | Use For |
|---|---|
| `feat:` | New feature |
| `fix:` | Bug fix |
| `docs:` | Documentation update |
| `style:` | Code formatting |
| `refactor:` | Code restructuring |
| `chore:` | Maintenance tasks |

---

## 👩‍💻 Author

<div align="center">

<img src="https://github.com/Diyajain3.png" width="130px" style="border-radius:50%; border: 3px solid #6366f1;"/>

### **Diya Jain**
*Full-Stack Developer · React Enthusiast · Open Source Builder*

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-Diyajain3-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Diyajain3)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/diyajain3)
[![Email](https://img.shields.io/badge/Email-Say%20Hi!-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:diyajain3@example.com)

<br/>

<img src="https://github-readme-stats.vercel.app/api?username=Diyajain3&show_icons=true&theme=tokyonight&hide_border=true&hide_title=true&hide_rank=true&show=reviews,discussions_started,prs_merged" alt="Contribution stats"/>

</div>

---

## 📜 License

Distributed under the **MIT License** — free to use, modify, and distribute. See [`LICENSE`](./LICENSE) for full terms.

---

<div align="center">

### 💜 If SnapResume saved you time, drop a ⭐ — it takes 2 seconds and means everything!

<br/>

**[⬆ Back to Top](#-table-of-contents)**

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:764ba2,100:667eea&height=120&section=footer" width="100%"/>

*Crafted with ❤️ by [Diya Jain](https://github.com/Diyajain3) · Open Source · MIT Licensed*

</div>

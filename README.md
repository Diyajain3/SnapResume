# 🚀 SnapResume — Professional AI-Powered Resume Builder

<p align="center">
  <img src="https://img.shields.io/github/repo-size/Diyajain3/SnapResume?style=for-the-badge&color=8A2BE2" alt="Repo Size" />
  <img src="https://img.shields.io/github/languages/count/Diyajain3/SnapResume?style=for-the-badge&color=6a1b9a" alt="Languages" />
  <img src="https://img.shields.io/github/stars/Diyajain3/SnapResume?style=for-the-badge&color=4a148c" alt="Stars" />
  <img src="https://img.shields.io/github/issues/Diyajain3/SnapResume?style=for-the-badge&color=ff4081" alt="Issues" />
</p>

SnapResume is a premium, full-stack web application designed to simplify the resume-building process. Featuring an intuitive, purple-themed glassmorphism dashboard and real-time preview engines, SnapResume helps job seekers craft flawless, ATS-friendly resumes in minutes.

---

## 📊 Technical Architecture & Metrics

| Component | Technology | Performance / Role |
| :--- | :--- | :--- |
| **Frontend** | React.js + Tailwind CSS | High-speed UI/UX & Glassmorphism |
| **Backend** | Node.js + Express.js | RESTful API & Secure Auth |
| **Database** | MongoDB + Mongoose | Scalable Document Storage |
| **Security** | JWT + Bcrypt | Encrypted User Sessions |

### 📈 System Statistics
*   **UI Responsiveness:** < 100ms Latency
*   **Database Sync:** Real-time Debounced updates
*   **Auth Lifecycle:** JWT-based stateless authentication
*   **Design Paradigm:** Modular, component-driven architecture

---

## ✨ Core Features
*   **🎛️ Premium Dashboard:** A sleek, interactive interface utilizing advanced glassmorphism design.
*   **⚡ Real-Time Sync:** Edit configurations and see changes reflected instantly.
*   **🎯 ATS Optimization:** Content structures optimized for Applicant Tracking Systems.
*   **📁 Multi-Profile Management:** Seamlessly manage, update, and duplicate resumes.

---

## 🛠️ Quick Start

### 1. Prerequisites
- Node.js (v16.x or higher)
- MongoDB Connection URI

### 2. Setup
```bash
# Clone the repository
git clone [https://github.com/Diyajain3/SnapResume.git](https://github.com/Diyajain3/SnapResume.git)
cd SnapResume

# Setup Backend
cd server
npm install
# Create .env (PORT, MONGO_URI, JWT_SECRET)
npm start

# Setup Frontend
cd ../client
npm install
npm run dev

# KITX — AI-Powered Placement Preparation Platform
**Frontend Foundation & Student Dashboard**
*Kothiwal Institute of Technology and Professional Studies (KITPS), Moradabad*

---

## 📌 Project Overview
**KITX** is an integrated placement training and career readiness ecosystem built for engineering and professional studies students at **KITPS Moradabad**. The platform unites diagnostic aptitude assessments, algorithmic coding practice, AI-assisted mock technical interviews, comprehensive domain notes, and student readiness analytics into a single responsive student portal.

This repository hosts the **React + Vite** frontend foundation and student dashboard developed by **Faiz** (Frontend & Dashboard Lead).

---

## 🚀 Tech Stack
- **Framework:** [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling & Design System:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/) (declarative nested routes, public & protected gates)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Data Visualization:** [Recharts](https://recharts.org/) (responsive bar & trend charts)
- **Code Quality:** [Oxlint](https://oxc-project.github.io/)

---

## 👥 Engineering Team & Modules
| Team Member | Module / Role | Focus Area |
| :--- | :--- | :--- |
| **Faiz** | Frontend & Dashboard Lead | Design system, UI components, Landing page, Student Dashboard, Profile, and API integration |
| **Aman** | Backend & Security Lead | Express.js backend, MongoDB/SQL database, auth APIs, session security, and CORS |
| **Ishika** | AI Integration Lead | AI mock interviews, code explanations, and conversational study assistant |
| **Divyanshi** | Aptitude & Assessment Lead | Quantitative aptitude, logical reasoning, verbal tests, and test analytics |
| **Anjali** | Coding & Technical Lead | DSA challenges, coding editor, test cases, and technical interview drills |
| **Kritika** | Progress & Resources Lead | Learning roadmaps, resource repository, resume guides, and QA |

---

## 📁 Project Architecture
```text
KITX/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Logos and imagery
│   ├── components/
│   │   ├── common/         # Atomic design system tokens
│   │   │   ├── Badge.jsx
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── EmptyState.jsx
│   │   │   ├── ErrorMessage.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── PageHeader.jsx
│   │   ├── dashboard/      # Dashboard widgets
│   │   │   ├── ProgressChart.jsx
│   │   │   ├── QuickActions.jsx
│   │   │   ├── RecentActivity.jsx
│   │   │   └── StatCard.jsx
│   │   ├── forms/          # Form inputs and selectors
│   │   │   └── FormSelect.jsx
│   │   └── layout/         # Application shell and navigation
│   │       ├── AppLayout.jsx
│   │       ├── DashboardHeader.jsx
│   │       ├── Footer.jsx
│   │       ├── Navbar.jsx
│   │       ├── PublicLayout.jsx
│   │       └── Sidebar.jsx
│   ├── config/             # Centralized environment variables
│   │   └── env.js
│   ├── context/            # Auth and session state
│   │   └── AuthContext.jsx
│   ├── hooks/              # Custom React hooks (useAuth)
│   │   └── useAuth.js
│   ├── pages/              # Application views
│   │   ├── AIStudyAssistant/
│   │   ├── Aptitude/
│   │   ├── Coding/
│   │   ├── Dashboard/
│   │   ├── Landing/
│   │   ├── Login/
│   │   ├── NotFound/
│   │   ├── Profile/
│   │   ├── Progress/
│   │   ├── Register/
│   │   └── Resources/
│   ├── routes/             # App routing, protected and public route gates
│   │   ├── AppRoutes.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── PublicRoute.jsx
│   ├── services/           # Centralized API service layer
│   │   ├── api.js
│   │   ├── authService.js
│   │   ├── dashboardService.js
│   │   └── userService.js
│   ├── utils/              # Validators, formatters, and constants
│   │   ├── constants.js
│   │   ├── formatters.js
│   │   └── validators.js
│   ├── App.jsx             # Root application component
│   ├── index.css           # Tailwind CSS directives and global styles
│   └── main.jsx            # React 19 entry point
├── .env.example            # Environment variables template
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- Node.js `v18.x` or higher (tested on Node v22.19.0)
- npm `v9.x` or higher

### 2. Installation
```bash
# Clone or navigate to the project directory
cd d:\KITX

# Install all dependencies
npm install
```

### 3. Environment Configuration
Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```
Default `.env` contents:
```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=KITX
VITE_INSTITUTION_NAME="Kothiwal Institute of Technology and Professional Studies"
VITE_INSTITUTION_CITY="Moradabad"
VITE_ENABLE_MOCK_FALLBACK=true
```

### 4. Running the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 5. Production Build & Linting
```bash
# Verify linting
npm run lint

# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🤝 Team API Integration Checklist (For Aman - Backend Lead)

To complete final end-to-end integration between Faiz's frontend and Aman's Express.js backend, please configure and confirm the following:

### 1. Base URL & CORS
- **Base Endpoint:** `http://localhost:5000/api` (configurable via `VITE_API_BASE_URL`)
- **CORS Allowed Origins:** `http://localhost:5173`, `http://127.0.0.1:5173`
- **Allowed Headers:** `Content-Type, Authorization, Accept`
- **Allowed Methods:** `GET, POST, PUT, PATCH, DELETE, OPTIONS`

### 2. Authentication Contract
- **Authorization Header:** `Authorization: Bearer <JWT_TOKEN>`
- **Registration Endpoint:** `POST /api/auth/register`
  ```json
  // Request
  {
    "name": "Faiz Ahmad",
    "email": "faiz@kitps.ac.in",
    "rollNumber": "2101640100045",
    "branch": "CSE",
    "graduationYear": "2025",
    "password": "SecurePassword123!"
  }
  // Expected Response (HTTP 201)
  {
    "success": true,
    "token": "eyJhbGciOi...",
    "user": {
      "id": "usr_...",
      "name": "Faiz Ahmad",
      "email": "faiz@kitps.ac.in",
      "rollNumber": "2101640100045",
      "branch": "CSE",
      "graduationYear": "2025"
    }
  }
  ```
- **Login Endpoint:** `POST /api/auth/login`
  ```json
  // Request
  {
    "email": "faiz@kitps.ac.in",
    "password": "SecurePassword123!"
  }
  // Expected Response (HTTP 200)
  {
    "success": true,
    "token": "eyJhbGciOi...",
    "user": { "id": "...", "name": "...", "email": "..." }
  }
  ```
- **Session Check Endpoint:** `GET /api/auth/me` (Protected)
- **Logout Endpoint:** `POST /api/auth/logout` (Optional/Token invalidation)

### 3. Student Profile Endpoints
- **Fetch Profile:** `GET /api/user/profile` (Protected)
  - Returns student profile with basic info, academic metrics, and placement preferences.
- **Update Profile:** `PUT /api/user/profile` (Protected)
  - Accepts editable fields: `name`, `email`, `phone`, `bio`, `semester`, `cgpa`, `internshipStatus`, `preferredLanguages`, `targetRoles`, `dreamCompanies`.
  - Returns updated profile object.

### 4. Dashboard Metrics Endpoints
- **Dashboard Summary:** `GET /api/dashboard/summary` (Protected)
  ```json
  {
    "stats": {
      "testsCompleted": 14,
      "testsTotal": 25,
      "codingProblemsSolved": 42,
      "codingGoal": 60,
      "aiSessionsCount": 9,
      "overallReadiness": 76
    },
    "domainReadiness": [
      { "subject": "Quantitative Aptitude", "score": 82 },
      { "subject": "Logical Reasoning", "score": 78 },
      { "subject": "Verbal Ability", "score": 70 },
      { "subject": "Data Structures & Algo", "score": 85 },
      { "subject": "Core CS", "score": 68 },
      { "subject": "HR & Tech Interview", "score": 72 }
    ],
    "weeklyActivity": [
      { "day": "Mon", "aptitude": 45, "coding": 60, "ai": 20 }
    ],
    "recentActivities": [
      {
        "id": "act_1",
        "title": "Completed TCS NQT Mock #3",
        "category": "Aptitude",
        "score": "84%",
        "status": "Passed",
        "timestamp": "2026-10-20T08:30:00Z"
      }
    ]
  }
  ```

### 5. Standardized Error Response Format
All failing endpoints should return standard JSON:
```json
{
  "success": false,
  "message": "Clear user-friendly explanation of error",
  "errors": []
}
```
HTTP status codes should reflect the error:
- `400 Bad Request` — Missing or malformed fields
- `401 Unauthorized` — Invalid or expired JWT token
- `403 Forbidden` — Insufficient role permissions
- `404 Not Found` — Resource not found
- `409 Conflict` — Roll number or email already registered
- `500 Internal Server Error` — Server exception

---

## 💡 Notes for Teammates (Divyanshi, Anjali, Ishika, Kritika)
All module routes have been cleanly established and protected:
- `/aptitude` -> [AptitudePage.jsx](file:///d:/KITX/src/pages/Aptitude/AptitudePage.jsx) (**Divyanshi**)
- `/coding` -> [CodingPage.jsx](file:///d:/KITX/src/pages/Coding/CodingPage.jsx) (**Anjali**)
- `/ai-assistant` -> [AIStudyAssistantPage.jsx](file:///d:/KITX/src/pages/AIStudyAssistant/AIStudyAssistantPage.jsx) (**Ishika**)
- `/resources` -> [ResourcesPage.jsx](file:///d:/KITX/src/pages/Resources/ResourcesPage.jsx) (**Kritika**)
- `/progress` -> [ProgressPage.jsx](file:///d:/KITX/src/pages/Progress/ProgressPage.jsx) (**Kritika**)

You can drop your UI components and logic directly inside your respective pages without having to restructure layouts or authentication logic!

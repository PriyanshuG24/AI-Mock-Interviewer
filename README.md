# 🤖 AI Mock Interviewer

A modern web application that provides **AI-powered mock interviews** to help users practice and improve their interview skills.  
The application uses **Google Generative AI** to conduct realistic interviews and provide smart feedback.

---

## ✨ Features

### 🔐 User Authentication
Secure sign-up and login using Clerk.

### 🎯 Create Custom Interviews
Set job role, description, and experience level.

### 🧠 AI-Powered Interviews
Realistic conversation-style interview sessions.

### ⚡ Real-time Feedback
Instant guidance, scores, and improvement tips.

### 📂 Interview History
Track and review previous mock interviews.

### 📱 Responsive UI
Works on desktop, tablet, and mobile devices.

### 🌙 Dark Mode
Eye-friendly dark theme support.

---

## 🛠 Tech Stack

### 🧩 Frontend
- Next.js 14 — https://nextjs.org
- React 18 — https://react.dev

### 🎨 Styling
- Tailwind CSS — https://tailwindcss.com

### 🔐 Authentication
- Clerk — https://clerk.com

### 🤖 AI
- Google Generative AI — https://ai.google.dev/

### 🗄 Database
- Neon PostgreSQL — https://neon.tech
- Drizzle ORM — https://orm.drizzle.team

### 🧭 UI Libraries
- Radix UI — https://www.radix-ui.com
- Lucide Icons — https://lucide.dev

---

## ✅ Prerequisites

You must have:

- Node.js 16 or higher — https://nodejs.org
- npm or yarn
- Google AI API key
- Clerk account
- Neon database

---

## 🚀 Getting Started

### 🛎 Step 1: Clone the Repository

```bash
git clone https://github.com/your-username/ai-interview-mocker.git
cd ai-interview-mocker
```
### 📦 Step 2: Install Dependencies
```bash
npm install
```

### 🔑 Step 3: Create Environment Variables
```bash
.env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

GOOGLE_AI_API_KEY=your_google_ai_api_key
DATABASE_URL=your_neon_database_url
```

### 🗄 Step 4: Run Database Migrations
```bash
npx drizzle-kit push
```

### ▶ Step 5: Start Development Server
```bash
npm run dev
```
Open in browser:
```bash
http://localhost:3000
```


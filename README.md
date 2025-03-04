# AI Mock Interviewer - Backend & Frontend

## 📌 Overview

**AI Mock Interviewer** is a platform that provides mock interview questions and evaluates user responses using AI. The project includes both **backend (Node.js, Express, LangChain.js)** and **frontend (React.js)** components.

---

## 🚀 Features

- 🔐 **User Authentication**
- 📌 **Select Field & Experience Level**
- 🎤 **Record Audio & Video Responses**
- 🧠 **AI Feedback on Answers**
- 🎨 **Frontend for User Interaction**

---

## 🏗 Project Structure

```
/Ai-Mock-Interviewer
│── /backend
│── /frontend
```

---

## 🔧 AI Mock Interviewer Setup

### Backend

1️⃣ Clone the Repository:

```sh
git clone https://github.com/PriyanshuG24/Ai_Mock_Interviewer.git
cd Ai-Mock-Interviewer/backend
```

2️⃣ Install Dependencies:

```sh
npm install
```

3️⃣ Configure Environment Variables:

```sh
GEMINI_API_KEY=your_gemini_api_key
```

4️⃣ Start the Server:

```sh
npm start
```

Backend runs on `http://localhost:5000`.

### Frontend

1️⃣ Navigate to Frontend:

```sh
cd ../frontend
```

2️⃣ Install Dependencies:

```sh
npm install
```

3️⃣ Start the Frontend:

```sh
npm start
```

Frontend runs on `http://localhost:5173`.

---

## 🚀 Deployment (Vercel)

### Backend Deployment

```sh
npm install -g vercel
vercel --prod
```

### Frontend Deployment

```sh
cd frontend
vercel --prod
```

Ensure backend URL is correctly set in the frontend.

---

## 🛠 Built With

- **Node.js & Express** - Backend Framework
- **LangChain.js** - AI Model Integration
- **Gemini API** - AI Text Generation & Evaluation
- **React.js** - Frontend UI

---

## 📜 License

This project is **open-source** under the MIT License.

---

## ✨ Contributors

- [PriyanshuG24](https://github.com/PriyanshuG24)

🚀 Happy Coding!


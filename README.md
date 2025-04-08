# 💬 Tiko - Full Stack Realtime Chat App

**Live App:** [https://tiko-fullstack-realtime-chat-app.onrender.com](https://tiko-fullstack-realtime-chat-app.onrender.com)

Tiko is a full-stack real-time chat application built with the MERN stack and Socket.IO. It supports user authentication, real-time messaging, user profiles, theme toggling, and online/offline presence detection.

---

## 🚀 Features

- 🔐 User Authentication (JWT-based, stored in HTTP-only cookies)
- 💬 Real-Time Messaging using Socket.IO
- 🧑‍💼 User Profile with Cloudinary-based avatar uploads
- 🎨 Theme Toggle (Light/Dark)
- 🟢 Online/Offline Status
- ⚡ Toast Notifications with `react-hot-toast`
- 🔄 Fully responsive UI using Tailwind CSS
- 🌐 Deployed on Render (full-stack)

---

## 🛠️ Tech Stack

### Frontend

- **React 18**
- **Zustand** for global state management
- **Socket.IO Client**
- **Axios**
- **Tailwind CSS**
- **React Router DOM**
- **Lucide React** for icons
- **React Hot Toast** for notifications

### Backend

- **Node.js + Express**
- **MongoDB + Mongoose**
- **Socket.IO**
- **Cloudinary** (profile image upload)
- **JWT + Cookie Parser**
- **Bcrypt.js** (password hashing)
- **CORS, Dotenv**

---
## ⚙️ Installation & Setup Guide

### 🔁 Clone the Repository

```bash
git clone https://github.com/sarthak1656/Tiko-Fullstack-realtime-chat-app.git
cd Tiko-Fullstack-realtime-chat-app
```

 📦 Backend Setup

```bash
cd backend
npm install
```
Create a .env file in the backend directory:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:5173
```

Run the backend server:
```bash
npm run dev
```


💻 Frontend Setup
In a new terminal:


cd frontend
```bash
npm install
npm run dev
```

🔗 App Running At
Frontend: http://localhost:5173
Backend: http://localhost:5000

Ensure both servers are running simultaneously in separate terminals.

🚀 Deployment
Full-stack deployed on Render

Make sure environment variables are properly configured on Render
Ensure CORS and cookie settings are production-ready for secure deployment


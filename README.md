# 📝 Task Management App (Tasky)

A modern task management web application built with **React, Zustand, Tailwind CSS, and JSON Server**.  
This app allows users to register, log in, and manage their personal tasks efficiently.

---

## 🚀 Features

### 🔐 Authentication
- User Sign Up
- User Sign In
- Prevent duplicate email registration
- Store logged-in user (Zustand + localStorage)

### ✅ Task Management
- Create tasks
- View all tasks (per user)
- Update tasks
- Delete tasks
- Add deadline to tasks
- Task ownership (each user sees only their tasks)

### 🛒 Cart-like Logic (Advanced State Practice)
- Add items
- Increase / decrease quantity
- Remove items safely (no negative values)

### 🌙 Theme System
- Light / Dark mode toggle
- Theme stored in localStorage
- Global UI theme switching using Tailwind

### 🔍 Search
- Search tasks by title or keyword

### 🧪 Testing
- Unit testing with **Vitest**
- UI testing with **React Testing Library**

---

## 🛠️ Tech Stack

- ⚛️ React (Vite)
- 🗂️ Zustand (State Management)
- 🎨 Tailwind CSS
- 🌐 JSON Server (Mock Backend)
- 🧪 Vitest + React Testing Library

---

## 📁 Project Structure

src/
│
├── component/ # Reusable UI components
├── module/ # Shared modules (Header, Footer, etc.)
├── pages/ # Main pages (Login, Signup, Tasks)
├── store/ # Zustand stores (auth, theme, cart)
├── hooks/ # Custom hooks (useForm, etc.)
├── routes/ # Routing setup
├── assets/ # Images and static files
└── test/ # Unit tests


---

## ⚙️ Installation & Setup

### 1. Clone the project

```bash
git clone <your-repo-url>
cd task-management-app

2. Install dependencies

npm install

3. Run JSON Server (Backend)

Create a db.json file:

{
  "users": [],
  "tasks": []
}

Start server:

npx json-server --watch db.json --port 3000

4. Run the frontend

npm run dev

5. Run tests
npm run test

📌 Future Improvements
🔒 JWT Authentication (real backend)
☁️ Deploy to cloud (Vercel / Netlify)
📱 Mobile responsiveness improvements
🧠 Advanced filters (status, priority)
📊 Dashboard analytics

🧑‍💻 Author

Roba Chimdessa

💡 Learning Goals Achieved

This project helped practice:

Component-based architecture
State management with Zustand
Form handling with custom hooks
API integration
Authentication logic
UI/UX design with Tailwind
Testing with Vitest
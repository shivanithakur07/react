🔐 Frontend Integration with JWT APIs (Session-Based UI)
📌 Overview

This project demonstrates a React-based frontend integrated with JWT authentication APIs. It implements session-based authentication, protected routes, and secure API communication using a token stored in session storage.

🎯 Objective
Build a frontend UI using React
Integrate with backend JWT APIs
Implement session-based authentication
Restrict access to protected pages
Demonstrate secure API calls using Authorization headers.

---

🧰 Tech Stack
Frontend:
React (Frontend Framework)
Bootstrap (Layout & Styling)
Material UI (UI Components)
Axios (API communication)
Backend:
Node.js
Express.js
JSON Web Token (JWT)

---

📁 Project Structure
project/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js
│   │   │   ├── Dashboard.js
│   │   │   └── ProtectedRoute.js
│   │   ├── api.js
│   │   ├── App.js
│   │   └── index.js
│
├── backend/
│   └── server.js

---

⚙️ Installation & Setup
1️⃣ Clone or Create Project
2️⃣ Setup Frontend
cd frontend
npm install
npm install axios bootstrap @mui/material @emotion/react @emotion/styled react-router-dom
3️⃣ Setup Backend
cd backend
npm init -y
npm install express cors jsonwebtoken

---

▶️ Running the Application
Start Backend Server
cd backend
node server.js
Start Frontend
cd frontend
npm start

---

🔐 Authentication Flow
User enters username and password
Frontend sends request to /login API
Backend verifies credentials and returns JWT token
Token is stored in sessionStorage
User is redirected to dashboard

Protected API requests include:

Authorization: Bearer <token>
Backend verifies token before sending data

---

🧩 Features Implemented
🔑 Login Page
User authentication via API
Stores JWT token in sessionStorage
Redirects to dashboard on success
🔒 Protected Dashboard
Accessible only if token exists
Fetches data from protected API
Displays response on UI
🔓 Logout
Clears session storage
Redirects to login page
🔐 Route Protection
Prevents unauthorized access
Redirects unauthenticated users
⚡ Axios Interceptor (Best Practice)
Automatically attaches JWT token to all API requests
Reduces code repetition
Improves maintainability

---

🔐 Security Considerations
JWT stored in sessionStorage (cleared after session ends)
Protected routes require valid token
Unauthorized requests are blocked

---


🧠 Conclusion
This project successfully demonstrates secure frontend-backend integration using JWT authentication. It ensures controlled access to protected resources and follows best practices like token-based authorization and Axios interceptors.

👨‍💻 Author
Shivani Thakur

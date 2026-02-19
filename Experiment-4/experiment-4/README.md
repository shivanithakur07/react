 Experiment 4 – React Context, Reducer & Memo

Overview

This project is an extension of Experiment 3 (Multi-Page React App with React Router).

In Experiment 4, the project has been enhanced by implementing:

- useContext (Global State Management)
- useReducer (Structured State Updates)
- useMemo (Performance Optimization)
- A new page connected using React Router

The project is a portfolio-based React application with a global theme system and analytics feature.

---

Objectives Achieved

✔ Understand global state using Context API  
✔ Manage complex state transitions using useReducer  
✔ Optimize derived computations using useMemo  
✔ Extend a multi-page React application  
✔ Maintain consistent UI/UX across pages  

---

Features Implemented:
1. React Router (Multi-Page Navigation)
The application contains 3 pages:

- Home
- Projects
- Analytics (New Page for Experiment 4)

Routing is implemented using `react-router-dom`.

---

2. useContext (Global State)

A global context (`AppContext`) is created to manage:

- Theme (Light / Dark Mode)
- Task State (Analytics page)

The context provider wraps the entire application in `main.jsx`.

Used in:
- Navbar component
- ThemeToggle component
- Analytics page

---

3. useReducer (Structured State Management)

A reducer (`appReducer.js`) manages:

- ADD_TASK
- TOGGLE_TASK
- DELETE_TASK
- TOGGLE_THEME

This ensures organized and scalable state updates.

---

4. useMemo (Performance Optimization)

`useMemo` is used to calculate:

- Total completed tasks (derived state)

This prevents unnecessary recalculations when unrelated state updates occur.

---

5. Dark / Light Theme

A global theme toggle button allows switching between:

- 🌙 Dark Mode
- ☀ Light Mode

The theme is applied to the entire application layout.

---

Screenshots

Screenshots are available in the /Screenshots folder.

---

📂 Folder Structure
src/
│
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── HeroSection.jsx
│ ├── CardComponent.jsx
│ ├── ThemeToggle.jsx
│ └── FilterBar.jsx
│
├── context/
│ └── AppContext.jsx
│
├── reducer/
│ └── appReducer.js
│
├── pages/
│ ├── Home.jsx
│ ├── Projects.jsx
│ └── Analytics.jsx
│
├── App.jsx
├── main.jsx
└── index.css

---

Technologies Used

- React
- Vite
- React Router DOM
- Context API
- useReducer
- useMemo

---
Installation & Run

1.Install dependencies:
npm install

2.Install React Router:
npm install react-router-dom

3.Start development server:
npm run dev

---

Learning Outcomes

1.Through this experiment, I learned:

2.How to manage global state using Context API

3.How to structure complex state using useReducer

4.How to optimize derived data using useMemo

5.How to extend multi-page React applications professionally




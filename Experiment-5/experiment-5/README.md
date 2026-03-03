Experiment 5 – React Advanced State Management 

Aim: To enhance the existing React application (Experiment 4) by implementing structured state management using Redux Toolkit, managing global application state using the Context API, optimizing performance with useMemo, and extending the application with a new page integrated using React Router.
---------x-------------x---------------x-----

Objective:

The objectives of this experiment are:

To replace useReducer with Redux Toolkit for scalable state management.

To implement global state handling using the Context API.

To optimize derived state calculations using useMemo.

To extend the application by adding a new page connected via React Router.

To maintain consistent UI/UX across all pages.

To build a structured and maintainable React project architecture.
---------x-------------x---------------x-----

Theory:

Modern React applications require efficient and scalable state management. In this experiment, the following core concepts were implemented:

1️)Redux Toolkit

Redux Toolkit simplifies Redux development by:

Using configureStore to set up the store.

Using createSlice to define reducers and actions together.

Allowing immutable state updates using Immer internally.

Managing centralized application state efficiently.

Redux is used to manage task data including:

Adding a task

Toggling task completion

Deleting a task

2️)Context API

The Context API allows global state sharing without prop drilling.

In this project, Context is used to manage:

Light/Dark theme toggle

App-wide theme switching

It ensures that multiple components can access and update theme state.

3️)useMemo Hook

useMemo is used for performance optimization.

It prevents unnecessary recalculations of derived values unless dependencies change.

In this project, useMemo is used to calculate:

Total number of tasks

Completed tasks

Pending tasks

Completion rate percentage

4️)React Router

React Router enables multi-page navigation without page reloads.

Pages included:

Home

Projects

Analytics

Reports (New page added in Experiment 5)

Features Implemented:

✔ Redux Toolkit store configuration
✔ Task slice with 3 reducers:

addTask

toggleTask

deleteTask

✔ Context API for theme management
✔ useMemo for analytics calculations
✔ New page added: Reports
✔ Responsive and clean UI
✔ Working Light/Dark mode
✔ Multi-page navigation
---------x-------------x---------------x-----

Project Structure:
experiment-5/
│
├── screenshots/
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── CardComponent.jsx
│   │
│   ├── context/
│   │   └── AppContext.jsx
│   │
│   ├── redux/
│   │   ├── store.js
│   │   └── slices/
│   │       └── taskSlice.js
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Analytics.jsx
│   │   └── Reports.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── README.md
└── vite.config.js
---------x-------------x---------------x-----

 New Page Added (Experiment 5):
Reports Page

The Reports page demonstrates:

Redux state usage

useSelector and useDispatch

useMemo for calculating completion rate

Context usage for theme

It displays:

Total tasks

Completion percentage
---------x-------------x---------------x-----

Installation & Setup:
1)Clone the repository:git clone <repository-link>

2)Navigate to project folder: cd experiment-5

3)Install dependencies: npm install

4)Run the project: npm run dev
---------x-------------x---------------x-----

Screenshots

Screenshots of:

Home Page

Reports Page

Redux Task Feature

Light/Dark Theme

are available inside the /screenshots folder.
---------x-------------x---------------x-----

Result:

The Experiment 5 React application was successfully developed by:

Replacing useReducer with Redux Toolkit.

Implementing Context API for theme management.

Optimizing calculations using useMemo.

Adding a new Reports page.

Maintaining consistent design and responsiveness.

The application runs successfully without errors and meets all the requirements of Experiment 5.
---------x-------------x---------------x-----

🔷 Learning Outcome:

Through this experiment, the following concepts were understood and implemented:

Structured state management using Redux Toolkit

Global state handling using Context API

Performance optimization using useMemo

Multi-page routing using React Router

Clean UI design and layout management

Project folder structuring for scalability

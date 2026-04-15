# 🔐 RBAC Frontend + Backend (React + Spring Boot)

## 📌 Objective

To implement **Role-Based Access Control (RBAC)** using a React frontend and Spring Boot backend with Spring Security.

---

## 🧩 Project Description

This project demonstrates how different users (USER and ADMIN) have different levels of access to application resources.

* Authentication is handled using **Basic Authentication**
* Authorization is implemented using **roles (USER / ADMIN)**
* Frontend controls UI visibility based on role
* Backend enforces security using **Spring Security**

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap
* Axios
* React Router

### Backend

* Spring Boot
* Spring Security
* Maven

---

## 🔐 Features Implemented

### 1. Login System

* User enters username and password
* Credentials are validated via backend API
* Role is stored in **sessionStorage**

---

### 2. Role-Based Dashboards

#### 👤 USER Dashboard

* Can access:

  /api/user/profile
* Cannot access:

  /api/admin/dashboard

#### 👨‍💼 ADMIN Dashboard

* Can access:

  /api/user/profile
  /api/admin/dashboard

---

### 3. Role-Based UI Control

* UI components are shown/hidden based on role
* USER cannot see admin options
* ADMIN can access all features

---

### 4. Session Management

* User and role stored in **sessionStorage**
* Session cleared on logout

---

### 5. Security (Backend)

* Implemented using Spring Security
* In-memory authentication used
* Role-based authorization enforced

---

## 🔗 API Endpoints

| Endpoint               | Access Role |
| ---------------------- | ----------- |
| /api/user/profile  | USER, ADMIN |
| /api/admin/dashboard | ADMIN only  |

---

## 🔑 Default Credentials

| Role  | Username | Password |
| ----- | -------- | -------- |
| USER  | user     | password |
| ADMIN | admin    | password |

---

## 🚫 Unauthorized Access Handling

* If USER tries to access admin API:

  * Returns **403 Forbidden**
* If wrong credentials:

  * Returns **401 Unauthorized**
---

## ▶️ How to Run the Project

### Backend

1. Open project in IntelliJ
2. Run DemoApplication.java
3. Server starts at:


   http://localhost:8080
   
  

---

### Frontend

1. Navigate to frontend folder
2. Run:

   npm install
   npm start
  
3. Open:


   http://localhost:3000


---

## 🧠 Key Concepts Learned

* Role-Based Access Control (RBAC)
* Spring Security configuration
* Authentication vs Authorization
* React session management
* API integration using Axios
* CORS handling

---

## 🎯 Conclusion

This project successfully demonstrates RBAC using a full-stack approach:

* Backend enforces security rules
* Frontend adapts UI based on roles
* Unauthorized access is properly handled

---

## 🙌 Author

Shivani Thakur

# 🔐 Role-Based Authorization (RBAC) in Spring Boot

---

## 📌 Project Overview

This project demonstrates the implementation of **authentication and role-based authorization (RBAC)** in a Spring Boot application using Spring Security.

The system secures REST APIs by allowing access based on user roles such as **USER** and **ADMIN**. Each endpoint is protected so that only authorized users can access specific resources.

---

## 🎯 Objective

The main objectives of this project are:

* To implement user authentication using Spring Security
* To restrict API access based on user roles
* To understand and apply role-based authorization
* To differentiate between HTTP status codes:

  * `401 Unauthorized` (no authentication)
  * `403 Forbidden` (access denied due to role)
* To test secured APIs using Postman

---

## ⚙️ Technologies Used

* Java
* Spring Boot
* Spring Security
* Spring Data JPA
* H2 Database (in-memory)
* Maven
* Postman

---

## 👤 User Roles

| Username | Password | Role  |
| -------- | -------- | ----- |
| user1    | user123  | USER  |
| admin1   | admin123 | ADMIN |

---

## 🌐 API Endpoints

| Endpoint               | Access      |
| ---------------------- | ----------- |
| `/api/public/hello`    | Public      |
| `/api/user/profile`    | USER, ADMIN |
| `/api/admin/dashboard` | ADMIN only  |

---

## 📁 Project Structure


src/
├── main/
│   ├── java/com/example/experiment_7/
│   │   ├── config/        # Security configuration
│   │   ├── controller/    # REST controllers
│   │   ├── entity/        # Database entities
│   │   ├── repository/    # Data access layer
│   │   ├── service/       # Business logic
│   │   └── Experiment_7Application.java
│   └── resources/
│       └── application.properties


---

## 🔐 Security Implementation

* Basic Authentication is used for login
* Users are stored in-memory with roles
* Endpoint protection is configured using Spring Security

### Access Rules:

* Public endpoints → accessible without authentication
* User endpoints → accessible by USER and ADMIN
* Admin endpoints → accessible by ADMIN only

---

##  Testing & Results

###  Successful Cases

* USER can access `/api/user/profile`
* ADMIN can access `/api/admin/dashboard`

### ❌ Restricted Cases

* USER cannot access admin endpoint → `403 Forbidden`
* Without login → `401 Unauthorized`

---

## 📸 Screenshots

The project includes screenshots demonstrating:

* Authentication using Postman
* USER accessing user endpoint
* USER denied access to admin endpoint
* ADMIN accessing admin endpoint

---

## 📚 Learning Outcomes

* Understanding of Spring Security fundamentals
* Implementation of authentication and authorization
* Securing REST APIs using role-based access control
* Handling HTTP status codes correctly
* Testing APIs using Postman

---

## 🏁 Result

The project successfully implements **role-based authorization in Spring Boot**, ensuring that:

* Only authenticated users can access protected endpoints
* Access is granted based on assigned roles
* Unauthorized and forbidden requests are handled correctly

---

## ✅ Conclusion

This project provides a practical understanding of securing backend applications using Spring Security and demonstrates how RBAC can be effectively applied in real-world applications.

---

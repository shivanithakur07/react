Experiment 6 – JWT Authentication using Spring Boot
Aim

To implement JWT (JSON Web Token) based authentication in a Spring Boot backend application and demonstrate authentication using Postman.

Objective

To understand how JWT works for authentication.

To implement user login using username and password.

To generate a JWT token for authenticated sessions.

To secure API routes using authentication tokens.

To test the authentication workflow using Postman.

Technologies Used

Java

Spring Boot

Spring Security

Maven

H2 Database

Postman

Git & GitHub

Project Description

This project demonstrates how JWT authentication works in a backend application.
When a user logs in with valid credentials, the server generates a token that can be used to access protected API routes.

The token is sent in the Authorization header when accessing secured endpoints.

Project Folder Structure
jwt-auth
│
├── src
│   └── main
│       └── java
│           └── com/example/jwt_auth
│               ├── controller
│               │   └── AuthController.java
│               │
│               ├── config
│               │   └── SecurityConfig.java
│               │
│               └── JwtAuthApplication.java
│
├── src/main/resources
│   └── application.properties
│
├── Screenshots
│   ├── login-request.png
│   ├── token-response.png
│   └── protected-route.png
│
├── pom.xml
└── README.md

Backend API Endpoints
1️⃣ Login Endpoint

Authenticates the user and returns a token.

Request

POST http://localhost:8080/login

Request Body

{
  "username": "user123",
  "password": "password123"
}

Response

{
  "token": "sample_jwt_token_123"
}
2️⃣ Protected Route

Access a secured endpoint using the token.

Request

GET http://localhost:8080/protected

Header

Authorization: Bearer sample_jwt_token_123

Response

Access Granted to Protected Route
Steps to Run the Project
Step 1 – Create Spring Boot Project

Create a new project using Spring Initializr with the following dependencies:

Spring Web

Spring Security

Spring Data JPA

H2 Database

Step 2 – Open Project in VS Code

Extract the generated project and open it using VS Code.

Step 3 – Implement Authentication Controller

Create an AuthController to handle login and protected routes.

Step 4 – Configure Security

Create a SecurityConfig file to configure Spring Security settings.

Step 5 – Run the Application

Run the Spring Boot server using:

.\mvnw spring-boot:run

The application will start on:

http://localhost:8080
Step 6 – Test API Using Postman
Login Request

Send a POST request with username and password.

Receive Token

The server returns a token after successful login.

Access Protected Route

Use the token in the Authorization header to access secured endpoints.

Postman Testing
Login Request

User sends login credentials to the server.

Example Request:

POST /login

Body:

{
  "username": "user123",
  "password": "password123"
}
JWT Token Response

After successful authentication, the server returns a token.

Example Response:

{
  "token": "sample_jwt_token_123"
}
Protected Route Access

User accesses a protected API using the token.

GET /protected

Header:

Authorization: Bearer sample_jwt_token_123
Screenshots

Screenshots of Postman requests and responses are included in the Screenshots folder.

Login request with credentials

JWT token received after authentication

Accessing protected route using the token

Result

The JWT authentication system was successfully implemented using Spring Boot.
The application allows users to log in, receive a token, and access protected routes using the authentication token.

Learning Outcomes

Learned how JWT authentication works in backend applications.

Understood token-based session management.

Implemented secure API endpoints using authentication tokens.

Gained experience testing APIs using Postman.

Learned how authentication improves API security.

Conclusion

JWT authentication provides a secure and scalable method for handling authentication in web applications.
This experiment demonstrates how a backend system can authenticate users, generate tokens, and protect routes using token-based authentication.


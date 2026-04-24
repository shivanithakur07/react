CRUD Operations using Node.js, Express.js, and MongoDB

Objective

The objective of this project is to implement CRUD (Create, Read, Update, Delete) operations using REST APIs with Node.js and Express.js, and store data in MongoDB.

---

Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* Postman

---

Project Structure

experiment10/
│── server.js
│── models/
│   └── Student.js
│── routes/
│   └── studentRoutes.js
│── package.json

---

 Features Implemented

Create (POST)

* Adds new student record to database
* Validates required fields
* Prevents duplicate email entries

---

 Read (GET)

* Fetch all student records
* Fetch single record using ID

---

 Update (PUT)

* Update existing student data using ID

---

 Delete (DELETE)

* Delete student record using ID

---
 Validation Features

* Prevents empty fields
* Prevents duplicate email entries
* Returns proper error messages

---

 How to Run Project

1. Install dependencies:


npm install


2. Start server:


npx nodemon server.js


3. Server runs on:


http://localhost:5000


---

 API Testing

APIs are tested using Postman:

* POST → Create record
* GET → Fetch records
* PUT → Update record
* DELETE → Delete record

---

Output Screenshots Included

* Create Record (POST)
* Read Records (GET)
* Update Record (PUT)
* Delete Record (DELETE)
* Validation Error (Duplicate Email)

---

Results
All CRUD operations executed successfully
Data stored and retrieved from MongoDB
Validation prevents duplicate and invalid entries
APIs tested successfully using Postman

---

Learning Outcomes
Learned how to build REST APIs using Node.js and Express.js
Understood database integration using MongoDB and Mongoose
Gained knowledge of CRUD operations
Learned API testing using Postman
Implemented validation and error handling

---

📘 Conclusion

This project successfully demonstrates CRUD operations using Node.js, Express.js, and MongoDB with proper validation and error handling. It provides a clear understanding of backend development and API creation.

---

**Author**

Shivani Thakur


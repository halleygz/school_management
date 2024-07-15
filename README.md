# School Management System - Backend

This is a backend application for a school management system. It provides APIs for managing various aspects of a school, including:

- **Staff Management:** Admins, Teachers.
- **Academic Management:** Academic Years, Terms, Programs, Subjects, Exams, Questions and Exam Results.
- **Student Management:** Student Registration, Enrollment, Exam Taking and Results.

## Technologies Used

- **Node.js:** JavaScript runtime environment
- **Express.js:** Web application framework for Node.js
- **MongoDB:** NoSQL database
- **Mongoose:** ODM (Object Data Modeling) library for MongoDB and Node.js
- **bcryptjs:** Library for password hashing
- **jsonwebtoken:** Library for generating and verifying JSON Web Tokens
- **dotenv:** Module for loading environment variables from a .env file
- **express-async-handler:** Module for handling asynchronous errors in Express.js routes

## Installation and Setup

1. Clone the repository

   ```
   git clone https://github.com/nkav2447/school_management.git
   ```

2. Install dependencies

   ```
   npm i
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```
   MONGO_URL=<your_mongodb_connection_string>
   PORT=<port_number>
   ```

4. Start the server

   ```
   npm run start
   ```

5. Developmnt server
   ```
   npm run serve
   ```

## API Documentation

### Table of Contents

- **[1. Admin Routes](#1-admin-routes)**

  - [1.1. Register Admin](#11-register-admin)
  - [1.2 Login Admin](#12-login-admin)
  - [1.3 Get All Admins](#13-get-all-admins)
  - [1.4 Get Admin Profile](#14-get-admin-profile)
  - [1.5 Update Admin Profile](#15-update-admin-profile)
  - [1.6 Delete Admin](#16-delete-admin)
  - [1.7 Admin Manages Teacher](#17-admin-manages-teacher)
  - [1.8 Admin Manages Exam Results](#18-admin-manages-exam-results)

- **[2. Academic Year Routes](#2-academic-year-routes)**

  - [2.1 Create Academic Year](#21-create-academic-year)
  - [2.2 Get All Academic Years](#22-get-all-academic-years)
  - [2.3 Get Single Academic Year](#23-get-single-academic-year)
  - [2.4 Update Academic Year](#24-update-academic-year)
  - [2.5 Delete Academic Year](#25-delete-academic-year)

- **[3. Academic Term Routes](#3-academic-term-routes)**

  - [3.1 Create Academic Term](#31-create-academic-term)
  - [3.2 Get All Academic Terms](#32-get-all-academic-terms)
  - [3.3 Get Single Academic Term](#33-get-single-academic-term)
  - [3.4 Update Academic Term](#34-update-academic-term)
  - [3.5 Delete Academic Term](#35-delete-academic-term)

- **[4. Class Level Routes](#4-class-level-routes)**

  - [4.1 Create Class Level](#41-create-class-level)
  - [4.2 Get All Class Levels](#42-get-all-class-levels)
  - [4.3 Get Single Class Level](#43-get-single-class-level)
  - [4.4 Update Class Level](#44-update-class-level)
  - [4.5 Delete Class Level](#45-delete-class-level)

- **[5. Program Routes](#5-program-routes)**

  - [5.1 Create Program](#51-create-program)
  - [5.2 Get All Programs](#52-get-all-programs)
  - [5.3 Get Single Program](#53-get-single-program)
  - [5.4 Update Program](#54-update-program)
  - [5.5 Delete Program](#55-delete-program)
  - [5.6 Add Subject to Program](#56-add-subject-to-program)

- **[6. Subject Routes](#6-subject-routes)**

  - [6.1 Create Subject](#61-create-subject)
  - [6.2 Get All Subjects](#62-get-all-subjects)
  - [6.3 Get Single Subject](#63-get-single-subject)
  - [6.4 Update Subject](#64-update-subject)
  - [6.5 Delete Subject](#65-delete-subject)

- **[7. Exam Routes](#7-exam-routes)**

  - [7.1 Create Exam](#71-create-exam)
  - [7.2 Get All Exams](#72-get-all-exams)
  - [7.3 Get Single Exam](#73-get-single-exam)
  - [7.4 Update Exam](#74-update-exam)

- **[8. Question Routes](#8-question-routes)**
  - [8.1 Create Question](#81-create-question)
  - [8.2 Get All Questions](#82-get-all-questions)
  - [8.3 Get Single Question](#83-get-single-question)
  - [8.4 Update Question](#84-update-question)
- **[9. Exam Result Routes](#9-exam-result-routes)**

  - [9.1 Student Checks Exam Results](#91-student-checks-exam-results)
  - [9.2 Get All Exam Results (Names and IDs)](#92-get-all-exam-results-names-and-ids)
  - [9.3 Admin Publishes/Unpublishes Exam Results](#93-admin-publishesunpublishes-exam-results)

- **[10. Student Routes](#10-student-routes)**
  - [10.1 Admin Registers Student](#101-admin-registers-student)
  - [10.2 Login Student](#102-login-student)
  - [10.3 Get Student Profile](#103-get-student-profile)
  - [10.4 Admin Gets All Students](#104-admin-gets-all-students)
  - [10.5 Admin Gets Single Student](#105-admin-gets-single-student)
  - [10.6 Student Takes Exam](#106-student-takes-exam)
  - [10.7 Student Updates Profile](#107-student-updates-profile)
  - [10.8 Admin Updates Student](#108-admin-updates-student)
- **[11. Teacher Routes](#11-teacher-routes)**
  - [11.1 Admin Registers Teacher](#111-admin-registers-teacher)
  - [11.2 Login Teacher](#112-login-teacher)
  - [11.3 Admin Gets All Teachers](#113-admin-gets-all-teachers)
  - [11.4 Get Teacher Profile](#114-get-teacher-profile)
  - [11.5 Admin Gets Single Teacher](#115-admin-gets-single-teacher)
  - [11.6 Teacher Updates Profile](#116-teacher-updates-profile)
  - [11.7 Admin Updates Teacher](#117-admin-updates-teacher)
- **[12. Year Group Routes](#12-year-group-routes)**
  - [12.1 Create Year Group](#121-create-year-group)
  - [12.2 Get All Year Groups](#122-get-all-year-groups)
  - [12.3 Get Single Year Group](#123-get-single-year-group)
  - [12.4 Update Year Group](#124-update-year-group)
  - [12.5 Delete Year Group](#125-delete-year-group)

### Authentication

Most routes require authentication. You can authenticate by including a JWT (JSON Web Token) in the `Authorization` header of your requests.

**Example:**

Authorization: Bearer <your_jwt_token>
You can obtain a JWT by logging in as an admin, teacher, or student.

### Error Handling

All errors are returned in JSON format with the following structure:

```json
{
  "status": "failed",
  "message": "Error message",
  "stack": "Error stack trace (optional)"
}
```

## 1. Admin Routes

### 1.1. Register Admin

```Json
POST /admins/register
Request Body:
{
  "name": "Admin Name",
  "email": "admin@example.com",
  "password": "password123"
}

Response:
{
"status": "success",
"data": {
"\_id": "admin_id",
"name": "Admin Name",
"email": "admin@example.com",
// ... other admin properties
},
"message": "Admin registered successfully"
}
```

### 1.2. Login Admin

```Json
POST /admins/login
Request Body:
{
"email": "admin@example.com",
"password": "password123"
}


Response:
{
"data": "jwt_token",
"message": "Admin logged in successfully"
}
```

### 1.3. Get All Admins

```Json
GET /admins
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"total": 1,
"pagination": {
"next": null,
"prev": null
},
"results": 1,
"status": "success",
"message": "Teachers fetched successfully",
"data": [
{
"_id": "admin_id",
"name": "Admin Name",
"email": "admin@example.com",
// ... other admin properties
}
]
}

```

### 1.4. Get Admin Profile

```Json
GET /admins/profile
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"data": {
"\_id": "admin_id",
"name": "Admin Name",
"email": "admin@example.com",
// ... other admin properties, including populated arrays for academicYears, academicTerms, programs, yearGroups, classLevels, teachers, and students
},
"message": "Admin Profile fetched successfully"
}
```

### 1.5. Update Admin Profile

```Json
PUT /admins/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Updated Admin Name",
"email": "updatedadmin@example.com",
"password": "newpassword123"
}

Response:
{
"status": "success",
"data": {
"\_id": "admin_id",
"name": "Updated Admin Name",
"email": "updatedadmin@example.com",
// ... other updated admin properties
},
"message": "Admin updated successfully"
}

```

### 1.6. Delete Admin

```Json
DELETE /admins/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"data": "delete admin"
}

```

### 1.7 Admin Manages Teacher

```Json
PUT /admins/suspend/teacher/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"data": " admin suspend teacher"
}

PUT /admins/unsuspend/teacher/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"data": " admin Unsuspend teacher"
}

PUT /admins/withdraw/teacher/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"data": " admin withdraw teacher"
}

PUT /admins/unwithdraw/teacher/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"data": " admin Unwithdraw teacher"
}
```

### 1.8 Admin Manages Exam Results

```Json
PUT /admins/publish/exam/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"data": " admin publish exam"
}

PUT /admins/unpublish/exam/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"data": " admin unpublish exam"
}
```

## 2. Academic Year Routes

### 2.1. Create Academic Year

```Json
POST /academic-years
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "2023-2024",
"fromYear": "2023-09-01T00:00:00.000Z",
"toYear": "2024-08-31T23:59:59.999Z"
}


Response:
{
"status": "success",
"message": "Academic year created successfully",
"data": {
"\_id": "academic_year_id",
// ... other academic year properties
    }
}

```

### 2.2. Get All Academic Years

```Json
GET /academic-years
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Academic years fetched successfully",
"data": [
{
"_id": "academic_year_id",
// ... other academic year properties
}
]
}

```

### 2.3. Get Single Academic Year

```Json
GET /academic-years/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Academic years fetched successfully",
"data": {
"\_id": "academic_year_id",
// ... other academic year properties
}
}

```

### 2.4. Update Academic Year

```Json
PUT /academic-years/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Updated 2023-2024",
"fromYear": "2023-09-01T00:00:00.000Z",
"toYear": "2024-08-31T23:59:59.999Z"
}

Response:
{
"status": "success",
"message": "Academic years updated successfully",
"data": {
"\_id": "academic_year_id",
// ... other updated academic year properties
}
}
```

### 2.5. Delete Academic Year

```Json
DELETE /academic-years/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Academic year deleted successfully"
}
```

## 3. Academic Term Routes

### 3.1. Create Academic Term

```Json
POST /academic-terms
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "1st Term",
"description": "First Term of the academic year",
"duration": "3 months"
}

Response:
{
"status": "success",
"message": "Academic term created successfully",
"data": {
"\_id": "academic_term_id",
// ... other academic term properties
}
}
```

### 3.2. Get All Academic Terms

```Json
GET /academic-terms
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Academic terms fetched successfully",
"data": [
{
"_id": "academic_term_id",
// ... other academic term properties
}
]
}
```

### 3.3. Get Single Academic Term

```Json
GET /academic-terms/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Academic terms fetched successfully",
"data": {
"\_id": "academic_term_id",
// ... other academic term properties
}
}
```

### 3.4. Update Academic Term

```Json
PUT /academic-terms/:id
Headers:
Authorization: Bearer <admin_jwt_token>
Request Body:
{
"name": "Updated 1st Term",
"description": "Updated First Term of the academic year",
"duration": "3 months"
}

Response:
{
"status": "success",
"message": "Academic term updated successfully",
"data": {
"\_id": "academic_term_id",
// ... other updated academic term properties
}
}
```

### 3.5. Delete Academic Term

```Json
DELETE /academic-terms/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Academic term deleted successfully"
}
```

## 4. Class Level Routes

### 4.1. Create Class Level

```Json
POST /class-levels
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Level 100",
"description": "First Year of Study"
}

Response:
{
"status": "success",
"message": "Class created successfully",
"data": {
"\_id": "class_level_id",
// ... other class level properties
}
}
```

### 4.2. Get All Class Levels

```Json
GET /class-levels
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Class Levels fetched successfully",
"data": [
{
"_id": "class_level_id",
// ... other class level properties
}
]
}
```

### 4.3. Get Single Class Level

```Json
GET /class-levels/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Class fetched successfully",
"data": {
"\_id": "class_level_id",
// ... other class level properties
}
}
```

### 4.4. Update Class Level

```Json
PUT /class-levels/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Updated Level 100",
"description": "Updated First Year of Study"
}

Response:
{
"status": "success",
"message": "Class updated successfully",
"data": {
"\_id": "class_level_id",
// ... other updated class level properties
}
}
```

### 4.5. Delete Class Level

```Json
DELETE /class-levels/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Class level deleted successfully"
}
```

## 5. Program Routes

### 5.1. Create Program

```Json
POST /programs
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Computer Science",
"description": "Study of computers and computational systems"
}

Response:
{
"status": "success",
"message": "Program created successfully",
"data": {
"\_id": "program_id",
// ... other program properties
}
}
```

### 5.2. Get All Programs

```Json
GET /programs
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Programs fetched successfully",
"data": [
{
"_id": "program_id",
// ... other program properties
}
]
}
```

### 5.3. Get Single Program

```Json
GET /programs/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Program fetched successfully",
"data": {
"\_id": "program_id",
// ... other program properties
}
}
```

### 5.4. Update Program

```Json
PUT /programs/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Updated Computer Science",
"description": "Updated Study of computers and computational systems"
}

Response:
{
"status": "success",
"message": "Program updated successfully",
"data": {
"\_id": "program_id",
// ... other updated program properties
}
}
```

### 5.5. Delete Program

```Json
DELETE /programs/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Program deleted successfully"
}
```

### 5.6. Add Subject to Program

```Json
PUT /programs/:id/subjects
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Data Structures and Algorithms"
}

Response:
{
"status": "success",
"message": "Subject added successfully",
"data": {
"\_id": "program_id",
// ... other program properties, including the added subject
}
}
```

## 6. Subject Routes

### 6.1. Create Subject

```Json
POST /subjects/:programID
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Introduction to Programming",
"description": "Basic programming concepts",
"academicTerm": "academic_term_id"
}

Response:
{
"status": "success",
"message": "Program created successfully",
"data": {
"\_id": "subject_id",
// ... other subject properties
}
}
```

### 6.2. Get All Subjects

```Json
GET /subjects
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Subjects fetched successfully",
"data": [
{
"_id": "subject_id",
// ... other subject properties
}
]
}
```

### 6.3. Get Single Subject

```Json
GET /subjects/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Subject fetched successfully",
"data": {
"\_id": "subject_id",
// ... other subject properties
}
}
```

### 6.4. Update Subject

```Json
PUT /subjects/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Updated Introduction to Programming",
"description": "Updated Basic programming concepts",
"academicTerm": "academic_term_id"
}

Response:
{
"status": "success",
"message": "subject updated successfully",
"data": {
"\_id": "subject_id",
// ... other updated subject properties
}
}
```

### 6.5. Delete Subject

```Json
DELETE /subjects/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "subject deleted successfully"
}
```

## 7. Exam Routes

### 7.1. Create Exam

```Json
POST /exams
Headers:
Authorization: Bearer <teacher_jwt_token>

Request Body:
{
"name": "Mid-Term Exam",
"description": "Mid-Term Exam for Computer Science",
"subject": "subject_id",
"program": "program_id",
"academicTerm": "academic_term_id",
"duration": "120 minutes",
"examDate": "2024-04-15T08:00:00.000Z",
"examTime": "08:00 AM",
"examType": "Mid-Term",
"createdBy": "teacher_id",
"academicYear": "academic_year_id",
"classLevel": "class_level_id"
}

Response:
{
"status": "success",
"message": "Exam created",
"data": {
"\_id": "exam_id",
// ... other exam properties
}
}
```

### 7.2. Get All Exams

```Json
GET /exams
Headers:
Authorization: Bearer <teacher_jwt_token>

Response:
{
"status": "success",
"message": "Exams fetched successfully",
"data": [
{
"_id": "exam_id",
// ... other exam properties, including populated questions array
}
]
}
```

### 7.3. Get Single Exam

```Json
GET /exams/:id
Headers:
Authorization: Bearer <teacher_jwt_token>

Response:
{
"status": "success",
"message": "Exam fetched successfully",
"data": {
"\_id": "exam_id",
// ... other exam properties
}
}
```

### 7.4. Update Exam

```Json
PUT /exams/:id
Headers:
Authorization: Bearer <teacher_jwt_token>

Request Body:
{
"name": "Updated Mid-Term Exam",
// ... other exam properties to update
}

Response:
{
"status": "success",
"message": "Exam updated successfully",
"data": {
"\_id": "exam_id",
// ... other updated exam properties
}
}
```

## 8. Question Routes

### 8.1. Create Question

```Json
POST /questions/:examID
Headers:
Authorization: Bearer <teacher_jwt_token>

Request Body:
{
"question": "What is the time complexity of searching in a binary search tree?",
"optionA": "O(n)",
"optionB": "O(log n)",
"optionC": "O(1)",
"optionD": "O(n log n)",
"correctAnswer": "O(log n)"
}

Response:
{
"status": "success",
"message": "Question created",
"data": {
"\_id": "question_id",
// ... other question properties
}
}
```

### 8.2. Get All Questions

```Json
GET /questions
Headers:
Authorization: Bearer <teacher_jwt_token>

Response:
{
"status": "success",
"message": "Question fetched successfully",
"data": [
{
"_id": "question_id",
// ... other question properties
}
]
}

```

### 8.3. Get Single Question

```Json
GET /questions/:id
Headers:
Authorization: Bearer <teacher_jwt_token>

Response:
{
"status": "success",
"message": "Question fetched successfully",
"data": {
"\_id": "question_id",
// ... other question properties
}
}

```

### 8.4. Update Question

```Json
PUT /questions/:id
Headers:
Authorization: Bearer <teacher_jwt_token>

Request Body:
{
"question": "Updated: What is the time complexity of searching in a binary search tree?",
// ... other question properties to update
}

Response:
{
"status": "success",
"message": "Question updated successfully",
"data": {
"\_id": "question_id",
// ... other updated question properties
}
}
```

## 9. Exam Result Routes

### 9.1. Student Checks Exam Results

```Json
GET /exam-results/:id/checking
Headers:
Authorization: Bearer <student_jwt_token>

Response:
{
"status": "success",
"message": "Exam result",
"data": {
"\_id": "exam_result_id",
// ... other exam result properties, including populated exam, classLevel, academicTerm, and academicYear
},
"student": {
"\_id": "student_id",
// ... other student properties
}
}
```

### 9.2. Get All Exam Results (Names and IDs)

```Json
GET /exam-results
Headers:
Authorization: Bearer <student_jwt_token>

\*\*

{
"status": "success",
"message": "Exam Results fetched",
"data": [
{
"_id": "exam_result_id",
"exam": {
"_id": "exam_id",
"name": "Exam Name"
}
}
]
}

```

### 9.3. Admin Publishes/Unpublishes Exam Results

```Json
PUT /exam-results/:id/admin-toggle-publish
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"publish": true // Set to false to unpublish
}

Response:
{
"status": "success",
"message": "Exam Results Updated",
"data": {
"\_id": "exam_result_id",
// ... other exam result properties, including updated isPublished status
}
}
```

## 10. Student Routes

### 10.1. Admin Registers Student

```Json
POST /students/admin/register
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Student Name",
"email": "student@example.com",
"password": "password123"
}

Response:
{
"status": "success",
"message": "Student registered successfully",
"data": {
"\_id": "student_id",
// ... other student properties
}
}
```

### 10.2. Login Student

```Json
POST /students/login
Request Body:
{
"email": "student@example.com",
"password": "password123"
}

Response:
{
"status": "success",
"message": "Student logged in successfully",
"data": "jwt_token"
}
```

### 10.3. Get Student Profile

```Json
GET /students/profile
Headers:
Authorization: Bearer <student_jwt_token>

Response:
{
"status": "success",
"data": {
"studentProfile": {
"name": "Student Name",
// ... other student profile properties
},
"currentExamResult": [
// ... current exam result (if published)
]
},
"message": "Student Profile fetched successfully"
}
```

### 10.4. Admin Gets All Students

```Json
GET /students/admin
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Students fetched successfully",
"data": [
{
"_id": "student_id",
// ... other student properties
}
]
}
```

### 10.5. Admin Gets Single Student

```Json
GET /students/:studentID/admin
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Student fetched successfully",
"data": {
"\_id": "student_id",
// ... other student properties
}
}
```

### 10.6. Student Takes Exam

```Json
POST /students/exams/:examID/write
Headers:
Authorization: Bearer <student_jwt_token>

Request Body:
{
"answers": [
"answer1",
"answer2",
// ... other answers
]
}

Response:
{
"status": "success",
"data": "You have submitted your exam. Check later for the results"
}
```

### 10.7. Student Updates Profile

```Json
PUT /students/update
Headers:
Authorization: Bearer <student_jwt_token>

Request Body:
{
"email": "updatedstudent@example.com",
"password": "newpassword123"
}

Response:
{
"status": "success",
"data": {
"\_id": "student_id",
// ... other updated student properties
},
"message": "Student updated successfully"
}
```

### 10.8. Admin Updates Student

```Json
PUT /students/:studentID/update/admin
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"classLevels": [
"Level 100",
"Level 200"
],
"academicYear": "academic_year_id",
"program": "program_id",
// ... other properties to update
}

Response:
{
"status": "success",
"data": {
"\_id": "student_id",
// ... other updated student properties
},
"message": "Student updated successfully"
}
```

## 11. Teacher Routes

### 11.1. Admin Registers Teacher

```Json
POST /teachers/admin/register
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Teacher Name",
"email": "teacher@example.com",
"password": "password123"
}

Response:
{
"status": "success",
"message": "Teacher registered successfully",
"data": {
"\_id": "teacher_id",
// ... other teacher properties
}
}
```

### 11.2. Login Teacher

```Json
POST /teachers/login
Request Body:
{
"email": "teacher@example.com",
"password": "password123"
}

Response:
{
"status": "success",
"message": "Teacher logged in successfully",
"data": "jwt_token"
}
```

### 11.3. Admin Gets All Teachers

```Json
GET /teachers/admin
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"total": 1,
"pagination": {
"next": null,
"prev": null
},
"results": 1,
"status": "success",
"message": "Teachers fetched successfully",
"data": [
{
"_id": "teacher_id",
// ... other teacher properties, including populated examsCreated array
}
]
}
```

### 11.4. Get Teacher Profile

```Json
GET /teachers/profile
Headers:
Authorization: Bearer <teacher_jwt_token>

Response:
{
"status": "success",
"data": {
"\_id": "teacher_id",
// ... other teacher properties
},
"message": "Teacher Profile fetched successfully"
}
```

### 11.5. Admin Gets Single Teacher

```Json
GET /teachers/:teacherID/admin
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Teacher fetched successfully",
"data": {
"\_id": "teacher_id",
// ... other teacher properties
}
}
```

### 11.6. Teacher Updates Profile

```Json
PUT /teachers/:teacherID/update
Headers:
Authorization: Bearer <teacher_jwt_token>

Request Body:
{
"email": "updatedteacher@example.com",
"password": "newpassword123"
}

Response:
{
"status": "success",
"data": {
"\_id": "teacher_id",
// ... other updated teacher properties
},
"message": "Teacher updated successfully"
}
```

### 11.7. Admin Updates Teacher

```Json
PUT /teachers/:teacherID/update/admin
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"program": "program_id",
"classLevel": "class_level_id",
"academicYear": "academic_year_id",
"subject": "subject_id"
}

Response:
{
"status": "success",
"data": {
"\_id": "teacher_id",
// ... other updated teacher properties
},
"message": "Teacher updated successfully"
}
```

## 12. Year Group Routes

### 12.1. Create Year Group

```Json
POST /year-groups
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Class of 2024",
"academicYear": "academic_year_id"
}

Response:
{
"status": "success",
"message": "Year Group created successfully",
"data": {
"\_id": "year_group_id",
// ... other year group properties
}
}
```

### 12.2. Get All Year Groups

```Json
GET /year-groups
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Year Groups fetched successfully",
"data": [
{
"_id": "year_group_id",
// ... other year group properties
}
]
}
```

### 12.3. Get Single Year Group

```Json
GET /year-groups/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Year Group fetched successfully",
"data": {
"\_id": "year_group_id",
// ... other year group properties
}
}
```

### 12.4. Update Year Group

```Json
PUT /year-groups/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Request Body:
{
"name": "Updated Class of 2024",
"academicYear": "academic_year_id"
}

Response:
{
"status": "success",
"message": "Year Group updated successfully",
"data": {
"\_id": "year_group_id",
// ... other updated year group properties
}
}
```

### 12.5. Delete Year Group

```Json
DELETE /year-groups/:id
Headers:
Authorization: Bearer <admin_jwt_token>

Response:
{
"status": "success",
"message": "Year Group deleted successfully"
}
```

## Contributing

Contributions are welcome! Please follow these steps:

- Fork the repository
- Create a new branch
- Make your changes
- Submit a pull request

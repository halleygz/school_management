const express = require("express");
const {
  adminRegisterStudent,
  loginStudent,
  getStudentProfile,
  getAllStudentsByAdmin,
  getStudentByAdmin,
  studentUpdateProfile,
  adminUpdateStudent,
  writeExam,
} = require("../../controller/students/studentsCtrl");

const isAdmin = require("../../middlewares/isAdmin");
const isAuthenticated = require("../../middlewares/isAuthenticated");
const isLogin = require("../../middlewares/isLogin");
const isStdudent = require("../../middlewares/isStudent");
const isStudentLogin = require("../../middlewares/isStudentLogin");
const roleRestriction = require("../../middlewares/roleRestriction");
const Student = require("../../model/Academic/Student");
const Admin = require("../../model/Staff/Admin");
const studentRouter = express.Router();

studentRouter.post("/admin/register", isLogin, isAdmin, adminRegisterStudent);
studentRouter.post("/login", loginStudent);
studentRouter.get(
  "/profile",
  isAuthenticated(Student),
  roleRestriction("student"),
  getStudentProfile
);
studentRouter.get(
  "/admin",
  isAuthenticated(Admin),
  roleRestriction("admin"),
  getAllStudentsByAdmin
);
studentRouter.get(
  "/:studentID/admin",
  isAuthenticated(Student),
  roleRestriction("admin"),
  getStudentByAdmin
);

studentRouter.post(
  "/exam/:examID/write",
  isAuthenticated(Student),
  roleRestriction("student"),
  writeExam
);

studentRouter.put(
  "/update",
  isAuthenticated(Student),
  roleRestriction("student"),
  studentUpdateProfile
);
studentRouter.put(
  "/:studentID/update/admin",
  isAuthenticated(Admin),
  roleRestriction("admin"),
  adminUpdateStudent
);
module.exports = studentRouter;

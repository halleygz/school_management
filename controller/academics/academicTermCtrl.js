const AysncHandler = require("express-async-handler");
const AcademicTerm = require("../../model/Academic/AcademicTerm");
const Admin = require("../../model/Staff/Admin");

exports.createAcademicTerm = AysncHandler(async (req, res) => {
  const { name, description, duration } = req.body;
  //check if exists
  const academicTerm = await AcademicTerm.findOne({ name });
  if (academicTerm) {
    throw new Error("Academic term already exists");
  }
  //create
  const academicTermCreated = await AcademicTerm.create({
    name,
    description,
    duration,
    createdBy: req.userAuth._id,
  });
  //push academic into admin
  const admin = await Admin.findById(req.userAuth._id);
  admin.academicTerms.push(academicTermCreated._id);
  await admin.save();
  res.status(201).json({
    status: "success",
    message: "Academic term created successfully",
    data: academicTermCreated,
  });
});

exports.getAcademicTerms = AysncHandler(async (req, res) => {
  const academicTerms = await AcademicTerm.find();

  res.status(201).json({
    status: "success",
    message: "Academic terms fetched successfully",
    data: academicTerms,
  });
});

exports.getAcademicTerm = AysncHandler(async (req, res) => {
  const academicTerms = await AcademicTerm.findById(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Academic terms fetched successfully",
    data: academicTerms,
  });
});

exports.updateAcademicTerms = AysncHandler(async (req, res) => {
  const { name, description, duration } = req.body;
  //check name exists
  const createAcademicTermFound = await AcademicTerm.findOne({ name });
  if (createAcademicTermFound) {
    throw new Error("Academic terms= already exists");
  }
  const academicTerms = await AcademicTerm.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      duration,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(201).json({
    status: "success",
    message: "Academic term updated successfully",
    data: academicTerms,
  });
});

exports.deleteAcademicTerm = AysncHandler(async (req, res) => {
  await AcademicTerm.findByIdAndDelete(req.params.id);

  res.status(201).json({
    status: "success",
    message: "Academic term deleted successfully",
  });
});

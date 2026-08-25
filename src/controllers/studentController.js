const Student = require("../models/Student");
const { sendSuccess, sendError } = require("../views/responseView");

const createStudent = async (req, res) => {
  try {
    const { name, email, phone, age, course } = req.body;

    if (!name || !email || !phone || age === undefined || !course) {
      return sendError(
        res,
        400,
        "Name, email, phone, age, and course are required."
      );
    }

    const student = await Student.create({ name, email, phone, age, course });

    return sendSuccess(res, 201, {
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to create student", error.message);
  }
};

const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    return sendSuccess(res, 200, students);
  } catch (error) {
    return sendError(res, 500, "Failed to fetch students", error.message);
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return sendError(res, 404, "Student not found");
    }

    return sendSuccess(res, 200, student);
  } catch (error) {
    return sendError(res, 500, "Failed to fetch student", error.message);
  }
};

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return sendError(res, 404, "Student not found");
    }

    return sendSuccess(res, 200, {
      message: "Student updated successfully",
      student,
    });
  } catch (error) {
    return sendError(res, 500, "Failed to update student", error.message);
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return sendError(res, 404, "Student not found");
    }

    return sendSuccess(res, 200, {
      message: "Student deleted successfully",
    });
  } catch (error) {
    return sendError(res, 500, "Failed to delete student", error.message);
  }
};

module.exports = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};

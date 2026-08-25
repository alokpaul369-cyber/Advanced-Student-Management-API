const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const {
  createStudent,
  getAllStudents,
  getSingleStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentController");

const router = express.Router();

router.use(authMiddleware);

router.post("/", createStudent);
router.get("/", getAllStudents);
router.get("/:id", getSingleStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;

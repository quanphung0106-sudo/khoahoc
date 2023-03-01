const express = require("express");
const router = express.Router();
const NewsController = require("../app/controllers/NewsController");

router.post("/", NewsController.createNew);
router.get("/", NewsController.getAll);
router.get("/:id", NewsController.getAnPost);
// router.post("/add-student/:id", ClassController.addStudent);
// router.get("/:id", ClassController.getClass);
// router.put("/:id", ClassController.updateClass);
// router.delete("/", ClassController.deleteAllClasses);
// router.delete("/:id", ClassController.deleteClass);

module.exports = router;

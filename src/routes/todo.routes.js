const express = require("express");
const router = express.Router();
const controller = require("../controller/todo.controller");

router.get("/list", controller.list);
router.get("/get/:id", controller.get);
router.post("/create", controller.create);
router.put("/update/:id", controller.update);
router.delete("/delete/:id", controller.delete);

module.exports = router;
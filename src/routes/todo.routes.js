const express = require("express");
const router = express.Router();
const controller = require("../controller/todo.controller");
const authenticate = require("../middlewares/authenticate")

router.get("/list", authenticate, controller.list);
router.get("/get/:id", controller.get);
router.post("/create", authenticate, controller.create);
router.patch("/update/:id", controller.update);
router.delete("/delete/:id", controller.delete);

module.exports = router;
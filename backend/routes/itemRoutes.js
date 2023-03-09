const express = require("express");
const itemController = require("../controllers/itemController");

const itemsRouter = express.Router();

itemsRouter.get("/", itemController.getItems);
itemsRouter.get("/:id", itemController.getItem);
itemsRouter.post("/", itemController.createItem);
itemsRouter.put("/:id", itemController.editItem);
itemsRouter.delete("/:id", itemController.deleteItem);

module.exports = itemsRouter;

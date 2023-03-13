const Item = require("../models/Item");
const Category = require("../models/Category");

const getItems = async (_req, res) => {
  const items = await Item.find({});

  res.json(items);
};

const getItem = async (req, res) => {
  const id = req.params.id;
  const item = await Item.findById(id);

  res.json(item);
};

const createItem = async (req, res) => {
  if (req.body.name === "" || !req.body.name)
    return res.status(400).json({ message: "Item name can't be empty" });

  const { name, description, price, selectedCategory } = req.body;
  const savedCategory = await Category.findById(selectedCategory);

  const item = new Item({
    name,
    description,
    price,
    category: savedCategory._id,
  });

  const savedItem = await item.save();

  savedCategory.items = [...savedCategory.items].concat(savedItem._id);
  await savedCategory.save();

  res.status(201).json(savedItem);
};

const editItem = async (req, res) => {
  const { name, description, price, category } = req.body;
  const id = req.params.id;
  const item = {
    name,
    description,
    price,
    category,
  };

  const updatedItem = await Item.findByIdAndUpdate(id, item, { new: true });

  res.json(updatedItem);
};

const deleteItem = async (req, res) => {
  const id = req.params.id;

  await Item.findByIdAndRemove(id);

  res.status(204).end();
};

module.exports = {
  getItems,
  getItem,
  createItem,
  editItem,
  deleteItem,
};

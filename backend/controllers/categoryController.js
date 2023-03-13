const Category = require("../models/Category");

const getCategories = async (_req, res) => {
  const categories = await Category.find({}).populate("items", {
    name: 1,
    description: 1,
    price: 1,
  });

  res.json(categories);
};

const getCategory = async (req, res) => {
  const id = req.params.id;
  const category = await Category.findById(id).populate("items", {
    name: 1,
    description: 1,
    price: 1,
  });

  res.json(category);
};

const createCategory = async (req, res) => {
  if (req.body.name === "" || !req.body.name)
    return res.status(400).json({ message: "Empty category can not be added" });

  const category = new Category({
    name: req.body.name,
  });

  const savedCategory = await category.save();

  res.status(201).json(savedCategory);
};

const editCategory = async (req, res) => {
  const id = req.params.id;
  const category = {
    name: req.body.name,
  };

  const updatedCategory = await Category.findByIdAndUpdate(id, category, {
    new: true,
  }).populate("items", {
    name: 1,
    description: 1,
    price: 1,
  });

  res.json(updatedCategory);
};

const deleteCategory = async (req, res) => {
  const id = req.params.id;

  await Category.findByIdAndRemove(id);

  res.status(204).end();
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  editCategory,
  deleteCategory,
};

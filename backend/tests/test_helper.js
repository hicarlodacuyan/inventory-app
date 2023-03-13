const Category = require("../models/Category");
const Item = require("../models/Item");

const initialCategories = [
  {
    _id: "640da877e64246ca2a0760f5",
    name: "Fruits",
  },
  {
    _id: "640de15cd547894004a37ac4",
    name: "Vegetables",
  },
  { _id: "640da579012ebda691b260d5", name: "Meats" },
  { _id: "640de457d547894004a37b4f", name: "Dairy" },
];

const initialItems = [
  {
    name: "Brocolli",
    description: "Fresh from Farmers' Market",
    price: 0.5,
    category: "640de15cd547894004a37ac4",
  },
  {
    name: "Wagyu Beef",
    description: "High quality from Japan",
    price: 4.99,
    category: "640da579012ebda691b260d5",
  },
];

const categoriesInDB = async () => {
  const categories = await Category.find({});
  return categories.map((category) => category.toJSON());
};

const itemsInDB = async () => {
  const items = await Item.find({});
  return items.map((item) => item.toJSON());
};

module.exports = { initialCategories, initialItems, categoriesInDB, itemsInDB };

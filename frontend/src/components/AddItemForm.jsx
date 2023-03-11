import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createItem } from "../features/itemSlice";

const AddItemForm = ({ categories }) => {
  const dispatch = useDispatch();
  const [newItem, setNewItem] = useState({
    name: "",
    description: "",
    price: 0,
  });
  const [selectedCategory, setSelectedCategory] = useState(categories);
  const { name, description, price, category } = newItem;

  const handleCreate = async (e) => {
    e.preventDefault();

    const item = {
      name,
      description,
      price,
      selectedCategory,
    };

    console.log(item);

    dispatch(createItem(item));
    setNewItem({
      name: "",
      description: "",
      price: 0,
      category: "",
    });
  };

  const onChange = (e) => {
    setNewItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleCreate}
      className="flex flex-col gap-4 p-4 bg-white md:max-w-md rounded-lg drop-shadow-lg"
    >
      <h1 className="text-xl">Create new item</h1>
      <input
        className="bg-transparent border-2 outline-none rounded-md p-2 focus:border-blue-500"
        type="text"
        value={name}
        name="name"
        onChange={onChange}
        placeholder="Name"
        required
      />
      <input
        className="bg-transparent border-2 outline-none rounded-md p-2 focus:border-blue-500"
        type="text"
        value={description}
        name="description"
        onChange={onChange}
        placeholder="Description"
        required
      />
      <input
        className="bg-transparent border-2 outline-none rounded-md p-2 focus:border-blue-500"
        type="text"
        value={price}
        name="price"
        onChange={onChange}
        placeholder="Price in USD"
        required
      />
      <select
        value={category}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option value={category.id}>{category.name}</option>
        ))}
      </select>
      <button
        className="bg-gray-200 text-black font-bold rounded-md p-2 hover:bg-gray-300"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddItemForm;

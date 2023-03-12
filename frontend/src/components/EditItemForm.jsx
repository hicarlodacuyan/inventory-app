import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../features/categorySlice";
import { updateItem } from "../features/itemSlice";

const EditItemForm = ({ item, onCancel }) => {
  const [newItem, setNewItem] = useState(item);
  const { name, description, price, category } = newItem;
  const dispatch = useDispatch();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedItem = {
      id: item.id,
      name,
      description,
      price,
      category,
    };

    dispatch(updateItem(updatedItem)).then(() => dispatch(getCategories()));
    onCancel();
  };

  const onChange = (e) => {
    setNewItem((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="flex flex-col gap-4 p-4 mb-4 bg-white w-3/4 md:w-2/4 lg:w-1/4 rounded-lg drop-shadow-lg"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Edit item</h1>
        <button type="button" onClick={onCancel} className="text-2xl font-bold">
          &times;
        </button>
      </div>
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
      <label htmlFor="price" className="-mb-4 italic text-gray-500">
        Price in USD
      </label>
      <input
        id="price"
        className="bg-transparent border-2 outline-none rounded-md p-2 focus:border-blue-500"
        type="text"
        value={price}
        name="price"
        onChange={onChange}
        placeholder="Price in USD"
        required
      />
      <button
        className="bg-gray-200 text-black font-bold rounded-md p-2 hover:bg-gray-300"
        type="submit"
      >
        Save
      </button>
    </form>
  );
};

export default EditItemForm;

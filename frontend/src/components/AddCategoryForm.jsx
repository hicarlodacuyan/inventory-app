import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../features/categorySlice";

const AddCategoryForm = () => {
  const [newCategory, setNewCategory] = useState("");
  const dispatch = useDispatch();

  const handleCreate = async (e) => {
    e.preventDefault();

    const category = {
      name: newCategory,
    };

    dispatch(createCategory(category));
    setNewCategory("");
  };

  return (
    <form
      onSubmit={handleCreate}
      className="flex flex-col gap-4 p-4 bg-white md:max-w-md rounded-lg drop-shadow-lg"
    >
      <h1 className="text-xl">Create new category</h1>
      <input
        className="bg-transparent border-2 outline-none rounded-md p-2 focus:border-blue-500"
        type="text"
        value={newCategory}
        name="newCategory"
        onChange={(e) => setNewCategory(e.target.value)}
        required
      />
      <button
        className="bg-gray-200 text-black font-bold rounded-md p-2 hover:bg-gray-300"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default AddCategoryForm;

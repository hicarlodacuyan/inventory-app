import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../features/categorySlice";

const AddCategoryForm = ({ setIsVisible }) => {
  const [newCategory, setNewCategory] = useState("");
  const dispatch = useDispatch();

  const handleCreate = async (e) => {
    e.preventDefault();

    const category = {
      name: newCategory,
    };

    setIsVisible(false);
    dispatch(createCategory(category));
    setNewCategory("");
  };

  return (
    <form
      onSubmit={handleCreate}
      className="flex flex-col gap-4 p-4 bg-white w-3/4 md:w-2/4 lg:w-1/4 rounded-lg drop-shadow-lg"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Create new category</h1>
        <button
          type="button"
          onClick={() => setIsVisible(false)}
          className="text-2xl font-bold"
        >
          &times;
        </button>
      </div>
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

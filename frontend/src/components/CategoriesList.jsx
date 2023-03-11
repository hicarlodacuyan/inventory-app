import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../features/categorySlice";
import EditCategoryForm from "./EditCategoryForm";

const CategoriesList = ({ categories }) => {
  const dispatch = useDispatch();
  const [editCategory, setEditCategory] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  const handleEdit = (category) => {
    setEditCategory(category);
  };

  return (
    <>
      {editCategory && (
        <EditCategoryForm
          category={editCategory}
          onCancel={() => setEditCategory(null)}
        />
      )}
      <ul className="flex flex-col md:flex-row gap-4 text-white flex-wrap">
        {categories.map((category) => (
          <li
            className="flex-1 bg-emerald-300 md:max-w-md rounded-lg overflow-hidden drop-shadow-lg"
            key={category.id}
          >
            <div className="p-4">
              <h2 className="text-4xl font-bold">{category.name}</h2>
              <p className="italic">
                {category.items ? category.items.length : 0} variety
              </p>
            </div>
            <div className="text-center font-bold bg-emerald-400 py-2">
              <Link to={`/categories/${category.id}`} state={category}>
                More info &rarr;
              </Link>
            </div>
            <div className="flex text-center">
              <button
                onClick={() => handleEdit(category)}
                className="flex-1 font-bold bg-blue-300 p-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(category.id)}
                className="flex-1 font-bold bg-red-300 p-2"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CategoriesList;

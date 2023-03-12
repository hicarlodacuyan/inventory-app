import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory } from "../features/categorySlice";
import EditCategoryForm from "./EditCategoryForm";

const CategoriesList = () => {
  const { categories } = useSelector((state) => state.category);
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
        <div className="fixed inset-0 m-auto flex justify-center items-center bg-gray-100/50 z-20">
          <EditCategoryForm
            category={editCategory}
            onCancel={() => setEditCategory(null)}
          />
        </div>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white flex-wrap">
        {categories.map((category) => (
          <li
            className="bg-emerald-300 rounded-lg overflow-hidden drop-shadow-lg"
            key={category.id}
          >
            <div className="p-4">
              <h2 className="text-4xl font-bold">{category.name}</h2>
              <p className="italic">
                {category.items ? category.items.length : 0} variety
              </p>
            </div>
            <div className="text-center font-bold bg-emerald-400 py-2">
              <Link to={`/categories/${category.id}`}>More info &rarr;</Link>
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

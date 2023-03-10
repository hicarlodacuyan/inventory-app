import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCategory } from "../features/categorySlice";

const CategoriesList = ({ categories }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteCategory(id));
  };

  return (
    <ul className="flex flex-col md:flex-row gap-4 text-white flex-wrap">
      {categories.map((category) => (
        <li className="flex-1 bg-emerald-300 md:max-w-md" key={category.id}>
          <div className="p-4">
            <h2 className="text-4xl font-bold">{category.name}</h2>
            <p className="italic">{category.items.length} variety</p>
          </div>
          <div className="text-center bg-emerald-400 py-2">
            <Link to={`/categories/${category.id}`} state={category}>
              More info &rarr;
            </Link>
          </div>
          <div className="flex text-center bg-emerald-400">
            <button className="flex-1 bg-blue-300">Edit</button>
            <button
              onClick={() => handleDelete(category.id)}
              className="flex-1 bg-red-300"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;

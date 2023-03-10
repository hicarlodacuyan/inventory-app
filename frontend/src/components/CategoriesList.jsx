import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CategoriesList = () => {
  const { categories } = useSelector((state) => state.category);

  return (
    <ul className="flex flex-col md:flex-row gap-4 text-white flex-wrap">
      {categories.map((category) => (
        <li className="flex-1 bg-blue-300 md:max-w-md" key={category.id}>
          <div className="p-4">
            <h2 className="text-4xl font-bold">{category.name}</h2>
            <p className="italic">{category.items.length} variety</p>
          </div>
          <div className="text-center bg-blue-400 py-2">
            <Link to={`/categories/${category.id}`} state={category}>
              More info &rarr;
            </Link>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;

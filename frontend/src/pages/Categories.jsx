import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CategoriesList from "../components/CategoriesList";

const Categories = () => {
  const { categories } = useSelector((state) => state.category);

  return (
    <div className="h-screen bg-slate-100 p-4">
      <h1 className="text-2xl font-bold mb-4">
        <Link to="/" className="font-black mr-4">
          &larr;
        </Link>
        Categories
      </h1>
      <CategoriesList />
    </div>
  );
};

export default Categories;

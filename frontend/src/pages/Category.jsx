import { Link, useLocation } from "react-router-dom";
import ItemsList from "../components/ItemsList";

const Category = () => {
  const location = useLocation();
  const currentCategory = location.state;

  return (
    <div className="h-screen bg-slate-100 p-4">
      <h1 className="text-2xl font-bold mb-4">
        <Link to="/categories" className="font-black mr-4">
          &larr;
        </Link>
        {currentCategory.name}
      </h1>
      <ItemsList items={currentCategory.items} />
    </div>
  );
};

export default Category;

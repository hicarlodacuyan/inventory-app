import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategories } from "../features/categorySlice";
import ItemsList from "../components/ItemsList";
import AddItemForm from "../components/AddItemForm";

const Category = () => {
  const { id } = useParams();
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [currentCategory] = categories.filter((category) => category.id === id);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [categories, dispatch]);

  return (
    <div className="h-screen bg-slate-100 p-4">
      {currentCategory && (
        <>
          <h1 className="text-2xl font-bold mb-4">
            <Link to="/categories" className="font-black mr-4">
              &larr;
            </Link>
            {currentCategory.name}
          </h1>
          <AddItemForm categories={[currentCategory]} />
          <hr className="my-4" />
          <ItemsList items={currentCategory.items} />
        </>
      )}
    </div>
  );
};

export default Category;

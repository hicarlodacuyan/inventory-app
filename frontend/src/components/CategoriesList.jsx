import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../features/categorySlice";
import LoadingSpinner from "./LoadingSpinner";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCategories());
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ul className="flex gap-4">
      {categories.map((category) => (
        <li className="text-4xl p-8 bg-red-300" key={category.id}>
          <Link to={`/categories/${category.id}`}>{category.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoriesList;

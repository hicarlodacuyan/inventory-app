import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CategoriesList from "../components/CategoriesList";
import { getCategories } from "../features/categorySlice";
import { useEffect, useState } from "react";
import LoadingSpinner from "../components/common/loading/LoadingSpinner";
import AddCategoryForm from "../components/AddCategoryForm";
import AddIcon from "../components/common/icons/AddIcon";

const Categories = () => {
  const { categories, isLoading, isError, message } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }

    if (isError) {
      console.log(message);
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        <Link to="/" className="font-black mr-4">
          &larr;
        </Link>
        Categories
      </h1>
      {isVisible ? (
        <div className="fixed inset-0 m-auto flex justify-center items-center bg-gray-100/50 z-20">
          <AddCategoryForm setIsVisible={setIsVisible} />
        </div>
      ) : (
        ""
      )}
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 w-16 h-16 flex justify-center items-center hover:scale-110 z-10"
      >
        <AddIcon />
      </button>
      <hr className="my-4" />
      {categories.length === 0 ? (
        <p className="text-xl md:text-2xl text-gray-400">
          Create categories using the add button
        </p>
      ) : (
        <>{isLoading ? <LoadingSpinner /> : <CategoriesList />}</>
      )}
    </div>
  );
};

export default Categories;

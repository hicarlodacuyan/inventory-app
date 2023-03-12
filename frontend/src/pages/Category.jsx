import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCategories } from "../features/categorySlice";
import ItemsList from "../components/ItemsList";
import AddItemForm from "../components/AddItemForm";
import AddIcon from "../components/common/icons/AddIcon";
import LoadingSpinner from "../components/common/loading/LoadingSpinner";

const Category = () => {
  const { id } = useParams();
  const { categories, isLoading } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [currentCategory] = categories.filter((category) => category.id === id);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategories());
    }
  }, [categories, dispatch]);

  return (
    <div className="p-4">
      {currentCategory && (
        <>
          <h1 className="text-2xl font-bold mb-4">
            <Link to="/categories" className="font-black mr-4">
              &larr;
            </Link>
            {currentCategory.name}
          </h1>
          {isVisible ? (
            <div className="fixed inset-0 m-auto flex justify-center items-center bg-gray-100/50 z-20">
              <AddItemForm
                categories={[currentCategory]}
                setIsVisible={setIsVisible}
              />
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
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <ItemsList items={currentCategory.items} />
          )}
        </>
      )}
    </div>
  );
};

export default Category;

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import ItemsList from "../components/ItemsList";
import LoadingSpinner from "../components/common/loading/LoadingSpinner";
import { getItems } from "../features/itemSlice";
import AddItemForm from "../components/AddItemForm";
import { getCategories } from "../features/categorySlice";
import AddIcon from "../components/common/icons/AddIcon";

const Items = () => {
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.item
  );
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      dispatch(getItems());
    }

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
        Items
      </h1>
      {isVisible ? (
        <div className="fixed inset-0 m-auto flex justify-center items-center bg-gray-100/50 z-20">
          {categories.length === 0 ? (
            ""
          ) : (
            <AddItemForm categories={categories} setIsVisible={setIsVisible} />
          )}
        </div>
      ) : (
        ""
      )}
      {categories.length === 0 ? (
        ""
      ) : (
        <button
          onClick={() => setIsVisible(true)}
          className="fixed bottom-4 right-4 w-16 h-16 flex justify-center items-center hover:scale-110 z-10"
        >
          <AddIcon />
        </button>
      )}
      <hr className="my-4" />
      {categories.length === 0 ? (
        <p className="text-xl md:text-2xl text-gray-400">
          Add a category to start adding items
        </p>
      ) : (
        <>{isLoading ? <LoadingSpinner /> : <ItemsList items={items} />}</>
      )}
    </div>
  );
};

export default Items;

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../features/categorySlice";
import { getItems } from "../features/itemSlice";
import LoadingSpinner from "../components/common/loading/LoadingSpinner";
import CategoriesIcon from "../components/common/icons/CategoriesIcon";
import ItemsIcon from "../components/common/icons/ItemsIcon";

const Home = () => {
  const {
    categories,
    isLoading: categoryIsLoading,
    isError: categoryIsError,
    message: categoryErrorMessage,
  } = useSelector((state) => state.category);
  const {
    items,
    isLoading: itemIsLoading,
    isError: itemIsError,
    message: itemErrorMessage,
  } = useSelector((state) => state.item);
  const dispatch = useDispatch();

  useEffect(() => {
    if (categoryIsError) {
      console.log(categoryErrorMessage);
      return;
    }

    if (itemIsError) {
      console.log(itemErrorMessage);
      return;
    }

    dispatch(getCategories());
    dispatch(getItems());
  }, [
    dispatch,
    categoryIsError,
    categoryErrorMessage,
    itemIsError,
    itemErrorMessage,
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <hr className="my-4" />
      <section className="flex flex-col md:flex-row gap-4 text-white">
        <div className="home-card bg-cyan-300">
          <div className="flex justify-between p-4">
            <div>
              {categoryIsLoading ? (
                <LoadingSpinner />
              ) : (
                <h2 className="text-4xl font-bold">{categories.length}</h2>
              )}
              <p className="italic">Total Categories</p>
            </div>
            <div className="opacity-50">
              <CategoriesIcon />
            </div>
          </div>
          <div className="text-center font-bold bg-cyan-400 py-2">
            <Link to="/categories">More info &rarr;</Link>
          </div>
        </div>
        <div className="home-card bg-teal-300">
          <div className="flex justify-between p-4">
            <div>
              {itemIsLoading ? (
                <LoadingSpinner />
              ) : (
                <h2 className="text-4xl font-bold">{items.length}</h2>
              )}
              <p className="italic">Total Items</p>
            </div>
            <div className="opacity-50">
              <ItemsIcon />
            </div>
          </div>
          <div className="text-center font-bold bg-teal-500 py-2">
            <Link to="/items">More info &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../features/categorySlice";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
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

  return (
    <div className="h-screen bg-slate-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Home</h1>
      <section className="flex flex-col md:flex-row gap-4 text-white flex-wrap">
        <div className="flex-1 bg-blue-300 md:max-w-md">
          {isLoading ? (
            <div className="flex justify-center items-center h-full">
              <LoadingSpinner />
            </div>
          ) : (
            <>
              <div className="p-4">
                <h2 className="text-4xl font-bold">{categories.length}</h2>
                <p className="italic">Total Categories</p>
              </div>
              <div className="text-center bg-blue-400 py-2">
                <Link to="/categories">More info &rarr;</Link>
              </div>
            </>
          )}
        </div>
        <div className="flex-1 bg-green-400 md:max-w-md">
          <div className="p-4">
            <h2 className="text-4xl font-bold">0</h2>
            <p className="italic">Total Items</p>
          </div>
          <div className="text-center bg-green-500 py-2">More info &rarr;</div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../features/categorySlice";
import LoadingSpinner from "../components/LoadingSpinner";
import { Link } from "react-router-dom";
import Items from "../components/Items";

const Category = () => {
  const { id } = useParams();
  const { currentCategory, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCategory(id));
  }, []);

  return (
    <div className="h-screen bg-slate-100 p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">
            <Link to="/categories" className="font-black mr-4">
              &larr;
            </Link>
            {currentCategory?.name}
          </h1>
          <Items items={currentCategory?.items} />
        </>
      )}
    </div>
  );
};

export default Category;

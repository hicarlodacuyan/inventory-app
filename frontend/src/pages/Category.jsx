import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../features/categorySlice";
import LoadingSpinner from "../components/LoadingSpinner";

const Category = () => {
  const { id } = useParams();
  const { currentCategory, isLoading, isError, message } = useSelector(
    (state) => state.category
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    dispatch(getCategory(id));
  }, []);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="text-4xl underline">{currentCategory?.name}</h1>
          <ul>
            {currentCategory?.items.map((item) => (
              <li key={item.id}>{item?.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Category;

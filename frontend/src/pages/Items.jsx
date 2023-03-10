import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import ItemsList from "../components/ItemsList";
import LoadingSpinner from "../components/LoadingSpinner";
import { getItems } from "../features/itemSlice";

const Items = () => {
  const { items, isLoading, isError, message } = useSelector(
    (state) => state.item
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length === 0) {
      dispatch(getItems());
    }

    if (isError) {
      console.log(message);
    }
  }, []);

  return (
    <div className="h-screen bg-slate-100 p-4">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">
            <Link to="/" className="font-black mr-4">
              &larr;
            </Link>
            Items
          </h1>
          <ItemsList items={items} />
        </>
      )}
    </div>
  );
};

export default Items;

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./features/categorySlice";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
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
    <div className="flex justify-center items-center gap-4 h-screen bg-gray-100">
      {categories.map((category) => (
        <p className="text-4xl p-8 bg-red-300" key={category.id}>
          {category.name}
        </p>
      ))}
    </div>
  );
}

export default App;

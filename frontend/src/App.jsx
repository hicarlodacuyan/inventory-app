import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "./features/categorySlice";

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
    return <p>Loading...</p>;
  }

  return (
    <div>
      {categories.map((category) => (
        <p>{category.name}</p>
      ))}
    </div>
  );
}

export default App;

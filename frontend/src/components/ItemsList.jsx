import { useDispatch } from "react-redux";
import { getCategories } from "../features/categorySlice";
import { deleteItem } from "../features/itemSlice";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
    dispatch(getCategories());
  };

  return (
    <ul className="flex flex-col md:flex-row gap-4 text-white flex-wrap">
      {items?.map((item) => (
        <li
          className="flex-1 bg-teal-400 md:max-w-md rounded-lg drop-shadow-lg overflow-hidden"
          key={item.id}
        >
          <div className="p-4">
            <h2 className="text-4xl font-bold">
              {item.name} (${item.price})
            </h2>
            <p className="italic">{item.description}</p>
          </div>
          <div className="flex text-center bg-emerald-400">
            <button
              onClick={() => console.log("Edited Item")}
              className="flex-1 font-bold bg-blue-300 p-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(item.id)}
              className="flex-1 font-bold bg-red-300 p-2"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemsList;

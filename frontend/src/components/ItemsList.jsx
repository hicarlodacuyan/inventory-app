import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../features/categorySlice";
import { deleteItem } from "../features/itemSlice";
import EditItemForm from "./EditItemForm";

const ItemsList = ({ items }) => {
  const dispatch = useDispatch();
  const [editItem, setEditItem] = useState(null);

  const handleDelete = (id) => {
    dispatch(deleteItem(id)).then(() => dispatch(getCategories()));
  };

  const handleEdit = (item) => {
    setEditItem(item);
  };

  return (
    <>
      {editItem && (
        <div className="fixed inset-0 m-auto flex justify-center items-center bg-gray-100/50 z-20">
          <EditItemForm item={editItem} onCancel={() => setEditItem(null)} />
        </div>
      )}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-white flex-wrap">
        {items?.map((item) => (
          <li
            className="bg-teal-400 md:max-w-md rounded-lg drop-shadow-lg overflow-hidden"
            key={item.id}
          >
            <div className="p-4">
              <h2 className="text-2xl font-bold">
                {item.name} (${item.price})
              </h2>
              <p className="italic">{item.description}</p>
            </div>
            <div className="flex text-center bg-emerald-400">
              <button
                onClick={() => handleEdit(item)}
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
    </>
  );
};

export default ItemsList;

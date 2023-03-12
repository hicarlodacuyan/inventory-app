import { useLocation } from "react-router-dom";
import ItemsList from "../components/ItemsList";

const Item = () => {
  const location = useLocation();
  const items = location.state;

  return (
    <div className="p-4">
      <ItemsList items={items} />
    </div>
  );
};

export default Item;

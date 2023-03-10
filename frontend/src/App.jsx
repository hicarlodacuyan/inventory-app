import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import Items from "./pages/Items";
import Item from "./pages/Item";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:id" element={<Category />} />
      <Route path="/items" element={<Items />} />
      <Route path="/items:id" element={<Item />} />
    </Routes>
  );
};

export default App;

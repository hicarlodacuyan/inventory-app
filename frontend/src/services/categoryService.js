import axios from "axios";

const getCategories = async () => {
  const response = await axios.get("/api/categories/");

  return response.data;
};

const getCategory = async (id) => {
  const response = await axios.get(`/api/categories/${id}`);

  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post("/api/categories/", category);

  return response.data;
};

const updateCategory = async ({ id, category }) => {
  const response = await axios.put(`/api/categories/${id}`, category);

  return response.data;
};

const deleteCategory = async (id) => {
  const response = await axios.delete(`/api/categories/${id}`);

  return response.data;
};

export default {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

import axios from "axios";

const baseUrl = "/api/categories";

const getCategories = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
};

const getCategory = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);

  return response.data;
};

const createCategory = async (category) => {
  const response = await axios.post(baseUrl, category);

  return response.data;
};

const updateCategory = async (id, name) => {
  const response = await axios.put(`${baseUrl}/${id}`, { name });

  return response.data;
};

const deleteCategory = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);

  return response.data;
};

export default {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};

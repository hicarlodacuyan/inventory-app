import axios from "axios";

const baseUrl = "/api/items";

const getItems = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
};
const getItem = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`);

  return response.data;
};

const createItem = async (item) => {
  const response = await axios.post(baseUrl, item);

  return response.data;
};

const updateItem = async (id, item) => {
  const response = await axios.put(`${baseUrl}/${id}`, item);

  return response.data;
};

const deleteItem = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`);

  return response.data;
};

export default {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
};

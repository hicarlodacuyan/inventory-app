const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const api = supertest(app);
const helper = require("./test_helper");
const Category = require("../models/Category");

beforeEach(async () => {
  await Category.deleteMany({});
  await Category.insertMany(helper.initialCategories);
});

describe("addition of a new category", () => {
  test("a valid category can be added", async () => {
    const newCategory = {
      name: "Legumes",
    };

    await api
      .post("/api/categories")
      .send(newCategory)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const categoriesAtEnd = await helper.categoriesInDB();
    expect(categoriesAtEnd).toHaveLength(helper.initialCategories.length + 1);

    const names = categoriesAtEnd.map((category) => category.name);
    expect(names).toContain("Legumes");
  });

  test("category without a content name is not added", async () => {
    const newCategory = {
      name: "",
    };

    await api.post("/api/categories").send(newCategory).expect(400);

    const categoriesAtEnd = await helper.categoriesInDB();

    expect(categoriesAtEnd).toHaveLength(helper.initialCategories.length);
  });
});

describe("when there is initially some categories saved", () => {
  test("all categories are returned", async () => {
    const response = await helper.categoriesInDB();

    expect(response).toHaveLength(helper.initialCategories.length);
  });
});

describe("updating a category name", () => {
  test("succeeds with status code 200 if id is valid", async () => {
    const categoriesAtStart = await helper.categoriesInDB();
    const categoryToUpdate = categoriesAtStart[0];

    const updatedCategory = {
      name: "New Name",
    };

    await api
      .put(`/api/categories/${categoryToUpdate.id}`)
      .send(updatedCategory)
      .expect(200);

    const categoriesAtEnd = await helper.categoriesInDB();
    expect(categoriesAtEnd).toHaveLength(helper.initialCategories.length);

    const names = categoriesAtEnd.map((category) => category.name);
    expect(names).toContain(updatedCategory.name);
    expect(names).not.toContain(categoryToUpdate.name);
  });
});

describe("deletion of a category", () => {
  test("succeeds with status code 204 if id is valid", async () => {
    const categoriesAtStart = await helper.categoriesInDB();
    const categoryToDelete = categoriesAtStart[0];

    await api.delete(`/api/categories/${categoryToDelete.id}`).expect(204);

    const categoriesAtEnd = await helper.categoriesInDB();
    expect(categoriesAtEnd).toHaveLength(helper.initialCategories.length - 1);

    const names = categoriesAtEnd.map((category) => category.name);
    expect(names).not.toContain(categoryToDelete.name);
  });
});

afterAll(() => {
  mongoose.connection.close();
});

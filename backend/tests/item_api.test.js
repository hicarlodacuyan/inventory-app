const supertest = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
const api = supertest(app);
const helper = require("./test_helper");
const Item = require("../models/Item");

beforeEach(async () => {
  await Item.deleteMany({});
  await Item.insertMany(helper.initialItems);
});

describe("addition of a new item", () => {
  test("a valid item can be added", async () => {
    const newItem = {
      name: "Pork",
      description: "Fresh from butchery",
      price: 3.99,
      selectedCategory: "640da579012ebda691b260d5",
    };

    await api
      .post("/api/items")
      .send(newItem)
      .expect(201)
      .expect("Content-Type", /application\/json/);

    const itemsAtEnd = await helper.itemsInDB();
    expect(itemsAtEnd).toHaveLength(helper.initialItems.length + 1);

    const names = itemsAtEnd.map((item) => item.name);
    expect(names).toContain("Pork");
  });

  test("item without a content name is not added", async () => {
    const newItem = {
      description: "Fresh from butchery",
      price: 3.99,
      category: "640da579012ebda691b260d5",
    };

    await api.post("/api/items").send(newItem).expect(400);

    const itemsAtEnd = await helper.itemsInDB();

    expect(itemsAtEnd).toHaveLength(helper.initialItems.length);
  });
});

describe("when there is initially some items saved", () => {
  test("all items are returned", async () => {
    const response = await helper.itemsInDB();

    expect(response).toHaveLength(helper.initialItems.length);
  });
});

describe("updating an item name", () => {
  test("succeeds with status code 200 if id is valid", async () => {
    const itemsAtStart = await helper.itemsInDB();
    const itemToUpdate = itemsAtStart[0];

    const updatedItem = {
      name: "Cabbage",
    };

    await api
      .put(`/api/items/${itemToUpdate.id}`)
      .send(updatedItem)
      .expect(200);

    const itemsAtEnd = await helper.itemsInDB();
    expect(itemsAtEnd).toHaveLength(helper.initialItems.length);

    const names = itemsAtEnd.map((item) => item.name);
    expect(names).toContain(updatedItem.name);
    expect(names).not.toContain(itemToUpdate.name);
  });
});

describe("deletion of an item", () => {
  test("succeeds with status code 204 if id is valid", async () => {
    const itemsAtStart = await helper.itemsInDB();
    const itemToDelete = itemsAtStart[0];

    await api.delete(`/api/items/${itemToDelete.id}`).expect(204);

    const itemsAtEnd = await helper.itemsInDB();
    expect(itemsAtEnd).toHaveLength(helper.initialItems.length - 1);

    const names = itemsAtEnd.map((item) => item.name);
    expect(names).not.toContain(itemToDelete.name);
  });
});

afterAll(() => {
  mongoose.connection.close();
});

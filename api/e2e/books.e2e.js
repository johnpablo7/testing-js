const request = require("supertest");
const { MongoClient } = require("mongodb");

const createApp = require("../src/app");
const { config } = require("../src/config");

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe("Test for books", () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3001);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    await server.close();
    await database.collection("books").drop();
  });

  describe("test for [GET] /api/v1/books", () => {
    test("should return list books", async () => {
      // Arrange
      const seedData = await database.collection("books").insertMany([
        {
          name: "Books1",
          year: 2001,
          author: "nicolas",
        },
        {
          name: "Books2",
          year: 2002,
          author: "andy",
        },
      ]);
      console.log(seedData);
      // Act
      const { body } = await request(app).get("/api/v1/books").expect(200);
      console.log(body);
      // Assert
      expect(body.length).toEqual(seedData.insertedCount);
    });
  });
});

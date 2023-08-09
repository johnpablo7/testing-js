const request = require("supertest");

const { generateManyBook } = require("../src/fakes/fake.book");

const mockGetAll = jest.fn();

jest.mock("../src/lib/mongo.lib", () =>
  jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {},
  }))
);

const createApp = require("../src/app");

describe("Test for books", () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe("test for [GET] /api/v1/books", () => {
    test("should return list books", async () => {
      // Arrange
      const fakeBooks = generateManyBook(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const { body } = await request(app).get("/api/v1/books").expect(200);
      console.log(body);
      // Assert
      expect(body.length).toEqual(fakeBooks.length);
    });
  });
});

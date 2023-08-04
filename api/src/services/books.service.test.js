const BooksService = require("./books.service");

describe("Test for BooksService", () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
  });

  describe("test for getBooks", () => {
    test("should return a list book", () => {
      // Arrange
      // Act
      const books = service.getBooks();
      // eslint-disable-next-line no-console
      console.log();
      // Assert
      expect(books.length).toEqual();
    });
  });
});

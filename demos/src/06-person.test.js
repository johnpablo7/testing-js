const Person = require("./06-person");

describe("Test for Person", () => {
  let person;
  // AAA
  // Arrange / Given / Preparar
  beforeEach(() => {
    person = new Person("Nicolas", 45, 1.7);
  });

  test("should return down", () => {
    // Arrange / Given / Preparar
    person.weight = 45;
    // Act / When / Actuar
    const imc = person.calcIMC();
    // Assert / Then / Asertar
    expect(imc).toBe("down");
  });

  test("should return normal", () => {
    person.weight = 59;
    const imc = person.calcIMC();
    expect(imc).toBe("normal");
  });
});

describe("Pruebas en el archivo demo", () => {
  test("Deben de ser iguales los strings", () => {
    const mensaje1 = "Hola Mundo";

    const mensaje2 = `Hola Mundo`;

    expect(mensaje1).toBe(mensaje2);
  });
});

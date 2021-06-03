import { getSaludo } from "../../base-pruebas/02-template-string";

describe("Prueba de temple-string", () => {
  test("Debe retonar el nombre", () => {
    const name = "Misael";

    const saludo = getSaludo("Misael");

    expect(saludo).toBe(`Hola ${name}`);
  });

  test("Debe retonar Hola Carlos", () => {
    const saludo = getSaludo();

    expect(saludo).toBe(`Hola Carlos`);
  });
});

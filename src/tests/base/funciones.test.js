import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas de funciones", () => {
  test("Debe de retornar un objecto", () => {
    const user = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const userRecived = getUser();

    expect(user).toEqual(userRecived);
  });

  test("Debete retornar objecto de usuario activo", () => {
    const userName = "Misael";
    const userObject = {
      uid: "ABC567",
      username: userName,
    };

    const userOnline = getUsuarioActivo(userName);

    expect(userObject).toEqual(userOnline);
  });
});

import React from "react";
import { shallow } from "enzyme";
import PrimeraApp from "../PrimeraApp";

describe("Prueba en componente", () => {
  test("debe de mostrar el componente", () => {
    const whapper = shallow(<PrimeraApp saludo="Hola, Soy Goku" />);

    expect(whapper).toMatchSnapshot();
  });
});

import { shallow } from "enzyme";
import CounterApp from "../CounterApp";

describe("Prueba en el componente del contador", () => {
  test("Debe de mostrar el componente correctamente", () => {
    const wrapper = shallow(<CounterApp value={10} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de mostrar el valor por defecto 100", () => {
    const wrapper = shallow(<CounterApp value={100} />);
    wrapper.find("h2").text();

    expect(wrapper.find("h2").text().trim()).toBe("100");
  });

  test("debe de incrementar el contador", () => {
    const wrapper = shallow(<CounterApp value={10} />);

    wrapper.find("button").at(0).simulate("click");
    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("11");
  });

  test("debe de decrementar el contador", () => {
    const wrapper = shallow(<CounterApp value={10} />);

    wrapper.find("button").at(2).simulate("click");
    const counterText = wrapper.find("h2").text();

    expect(counterText).toBe("9");
  });
});

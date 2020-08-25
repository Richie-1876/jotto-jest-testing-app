import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import { findBytestAttr } from "../test/testUtils";
import Congrats from "./Congrats";

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a ShallowWrapper for the congrats component
 * @function setup
 * @param {object} props - Component props specific to this setup
 * @returns - {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Congrats {...props} />);
};

test("renders without error", () => {
  const wrapper = setup();
  const component = findBytestAttr(wrapper, "component-congrats");
  expect(component.length).toBe(1);
});
test("renders no text when success prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findBytestAttr(wrapper, "component-congrats");
  expect(component.text()).toBe("");
});
test("renders non empty success message when success prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findBytestAttr(wrapper, "congrats-message");
  expect(message.text().length).not.toBe(0);
});

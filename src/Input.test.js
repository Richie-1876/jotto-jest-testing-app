import React from "react";
import { shallow } from "enzyme";
import { findByTestAttr, storeFactory } from "../test/testUtils";

import Input from "./Input";

/*****************************************************************************
 *Factory Function to create ShallowWrapper for the GuessedWord component
 * @function setup
 * @param {object} initialState - Inintial state for this setup
 * @returns {ShallowWrapper}
 *****************************************************************************/

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe("render", () => {
  describe("word has not been guessed", () => {
    test("renders without error", () => {});
    test("renders input box", () => {});
    test("renders the submit button", () => {});
  });
  describe("word has been guessed", () => {
    test("renders without error", () => {});
    test("does not render input box", () => {});
    test("does not render the submit button", () => {});
  });
});

describe("update state", () => {});

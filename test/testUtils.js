import checkPropTypes from "check-prop-types";
import { createStore, applyMiddleware } from "redux";

import rootReducer from "../src/reducers";
import { middlewares } from "../src/configureStore";

/***************************************************************************
 *Create a testing store with imported reducers, middleware and initialState
 * globals: rootReducer
 * @param {object} initialState - initial state for the store
 * @function storeFactory
 * @returns {Store} - Redux store
 ****************************************************************************/

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(rootReducer, initialState);
};

/****************************************************************************
 * returns node(s) with given data-test attribute
 * @param - {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param - {string} val - value of the data-test attribute for search
 * @returns {ShallowWrapper}
 ****************************************************************************/

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

export const checkProps = (component, conformingProps) => {
  const propsError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propsError).toBeUndefined();
};

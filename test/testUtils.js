import checkPropTypes from "check-prop-types";
/**
 * returns node(s) with given data-test attribute
 * @param - {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param - {string} val - value of the data-test attribute for search
 * @returns {ShallowWrapper}
 */

export const findBytestAttr = (wrapper, val) => {
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

import { correctGuess, actionTypes } from "./index";

describe("correctGuess", () => {
  test('returns an object with type "CORRECT_GUESS"', () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
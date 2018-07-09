import { getCategories } from "../actions/getCategories";

export const setPlatform = platform => (dispatch, getState) => {
  dispatch({
    type: "SET_PLATFORM",
    platform
  });

  return dispatch(getCategories(platform));
};

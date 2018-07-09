import { apiGetCategories } from "../api/api";
import { setCategory } from "../actions/setCategory";

export const getCategories = platform => (dispatch, getState) => {
  return apiGetCategories(platform)
    .then(response => {
      const categories = response.data.result.categories;
      dispatch({
        type: "GET_CATEGORIES",
        categories
      });
    })
    .then(() => {
      if (
        getState().categories.filter(
          category => category.api_code === getState().category
        ).length === 0
      ) {
        dispatch(setCategory(""));
      }
    })
    .then(() => {
      const category = getState().category || getState().categories[0].api_code;

      getState().search === ""
        ? dispatch(setCategory(category))
        : dispatch(setCategory(""));
    })
    .catch(error => {
      console.error("error", error);
    });
};

import {apiGetCategories} from './../api/api';

const getCategories = (platform) => (dispatch) => {
  return apiGetCategories(platform)
    .then(response => (
      dispatch({
        type: 'GET_CATEGORIES',
        categories: response.data.result.categories
      })
    )).catch(error => (
      console.error('error', error)
    ))
};

export default getCategories;

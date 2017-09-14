import {apiGetCategoryIcons} from '../api/api';

export const getCategoryIcons = (platform, category) => (dispatch) => {

  dispatch({
    type: 'FETCHING_ICONS_REQUEST'
  });

  return apiGetCategoryIcons(platform, category)
    .then(response => (
      dispatch({
        type: 'GET_CATEGORY_ICONS',
        icons: response.data.result.category.subcategory
      })
    )).then(() => (
      dispatch({
        type: 'FETCHING_ICONS_SUCCESS'
      })
    )).catch(error => (
      console.error('error', error)
    ))
};

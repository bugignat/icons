import {apiGetCategoryIcons} from '../api/api';
import {setSize} from '../actions/setSize';

export const getCategoryIcons = (platform, category) => (dispatch, getState) => {

  dispatch({
    type: 'FETCHING_ICONS_REQUEST'
  });

  return apiGetCategoryIcons(platform, category)
    .then(response => (
      dispatch({
        type: 'GET_CATEGORY_ICONS',
        icons: response.data.result.category.subcategory
      })
    ))
    .then(() => {
      const platforms = getState().platforms;
      const currentPlatform = platforms.filter(platform => platform.apiCode === getState().platform);
      const iconSize = +currentPlatform[0].size;
      dispatch(setSize(iconSize));
    })
    .then(() => (
      dispatch({
        type: 'FETCHING_ICONS_SUCCESS'
      })
    ))
    .catch(error => {
      console.error('error', error)
    })
};

import {apiGetPlatforms} from '../api/api';
import {setPlatform} from '../actions/setPlatform';
import {setSize} from '../actions/setSize';
import {getCategories} from '../actions/getCategories';
import {setCategory} from '../actions/setCategory';
import {getCategoryIcons} from '../actions/getCategoryIcons';

export const getContent = () => (dispatch, getState) => {
  return apiGetPlatforms()
    .then(response => {
      const platforms = response.data.result;
      return dispatch({
        type: 'GET_PLATFORMS',
        platforms
      });
    })
    .then(() => {
      const platform = getState().platforms[0].apiCode;
      return dispatch(setPlatform(platform));
    })
    .then(() => {
      const size = getState().platforms[0].size;
      dispatch(setSize(+size));
    })
    .then(() => {
      const platform = getState().platform;
      return dispatch(getCategories(platform));
    })
    .then(() => {
      const category = getState().categories[0].api_code;
      dispatch(setCategory(category));
    })
    .then(() => {
      const platform = getState().platform;
      const category = getState().category;
      dispatch(getCategoryIcons(platform, category));
    })
    .catch(error => (
      console.error('error', error)
    ));
};

import {apiGetSearchIcons} from '../api/api';
import {setSize} from '../actions/setSize';

export const getSearchIcons = (platform, term) => (dispatch, getState) => {

  dispatch({
    type: 'FETCHING_ICONS_REQUEST'
  });

  return apiGetSearchIcons(platform, term)
    .then(response => (
      dispatch({
        type: 'GET_SEARCH_ICONS',
        icons: response.data.result.search,
        term: term
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

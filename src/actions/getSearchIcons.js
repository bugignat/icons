import {apiGetSearchIcons} from './../api/api';

export const getSearchIcons = (platform, term) => (dispatch) => {

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
    )).then(() => (
      dispatch({
        type: 'FETCHING_ICONS_SUCCESS'
      })
    )).catch(error => (
      console.error('error', error)
    ))
};

import {getCategories} from '../actions/getCategories';

export const setPlatform = (platform) => (dispatch) => {

  dispatch({
    type: 'SET_PLATFORM',
    platform
  });

  return dispatch(getCategories(platform));

};

import {getCategoryIcons} from '../actions/getCategoryIcons';
import {getSearchIcons} from '../actions/getSearchIcons';

export const setCategory = (category) => (dispatch, getState) => {

  dispatch({
    type: 'SET_CATEGORY',
    category: category
  });

  getState().search === ''
    ? dispatch(getCategoryIcons(getState().platform, getState().category))
    : dispatch(getSearchIcons(getState().platform, getState().search))

};

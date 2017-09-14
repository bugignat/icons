import {apiGetPlatforms} from '../api/api';
import {setPlatform} from '../actions/setPlatform';

export const getContent = () => (dispatch, getState) => {

  return apiGetPlatforms()
    .then(response => {
      const platforms = response.data.result;
      dispatch({
        type: 'GET_PLATFORMS',
        platforms
      });
    })
    .then(() => {
      const platform = getState().platforms[0].apiCode;
      dispatch(setPlatform(platform));
    })
    .catch(error => {
      console.error('error', error)
    });

};

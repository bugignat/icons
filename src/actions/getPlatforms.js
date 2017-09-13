import {apiGetPlatforms} from './../api/api';

const getPlatforms = () => (dispatch, getState) => {
  return apiGetPlatforms()
    .then(response => {
      const platforms = response.data.result;
      dispatch({
        type: 'GET_PLATFORMS',
        platforms
      });
    }).catch(error => (
      console.error('error', error)
    ));
};

export default getPlatforms;

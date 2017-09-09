import {apiGetPlatforms} from './../api/api';

const getPlatforms = () => (dispatch) => {
  return apiGetPlatforms()
    .then(response => (
      dispatch({
        type: 'GET_PLATFORMS',
        platforms: response.data.result
      })
    )).catch(error => (
      console.error('error', error)
    ));
};

export default getPlatforms;

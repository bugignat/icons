export const setPlatform = (platform) => (dispatch) => {
  dispatch({
    type: 'SET_PLATFORM',
    platform: platform
  })
};

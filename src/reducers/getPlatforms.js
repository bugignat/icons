export const getPlatforms = (state = [], action) => {

  if (action.type === 'GET_PLATFORMS') {
    let platforms = Object.values(action.platforms);
    platforms.splice(0,1);
    return platforms;
  } else {
    return state;
  }

};

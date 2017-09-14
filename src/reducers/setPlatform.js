export const setPlatform = (state = '', action) => {

  if (action.type === 'SET_PLATFORM') {
    return action.platform;
  } else {
    return state;
  }

};

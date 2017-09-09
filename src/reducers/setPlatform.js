const setPlatform = (state = 'ios7', action) => {

  if (action.type === 'SET_PLATFORM') {
    return action.platform;
  } else {
    return state;
  }

};

export default setPlatform;

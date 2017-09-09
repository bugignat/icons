const setSize = (state = 50, action) => {

  if (action.type === 'SET_SIZE') {
    return action.size;
  } else {
    return state;
  }

};

export default setSize;

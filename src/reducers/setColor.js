const setColor = (state = false, action) => {

  if (action.type === 'SET_COLOR') {
    return action.color;
  } else {
    return state;
  }

};

export default setColor;

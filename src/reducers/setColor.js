const defaultState = {
  isColor: false,
  value: '#000000'
};

const setColor = (state = defaultState, action) => {

  if (action.type === 'SET_IS_COLOR') {
    const isColor = {
      isColor: action.isColor
    };
    return isColor;
  } else {
    return state;
  }

};

export default setColor;

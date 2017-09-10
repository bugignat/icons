const setColor = (color) => (dispatch) => {
  dispatch({
    type: 'SET_COLOR',
    color: color
  })
};

export default setColor;

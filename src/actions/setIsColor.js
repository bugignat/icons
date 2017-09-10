const setIsColor = (isColor) => (dispatch) => {
  dispatch({
    type: 'SET_IS_COLOR',
    isColor: isColor
  })
};

export default setIsColor;

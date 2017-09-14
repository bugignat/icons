export const setSize = (size) => (dispatch) => {

  dispatch({
    type: 'SET_SIZE',
    size: size
  })

};

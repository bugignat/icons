export const setSize = (state = '', action) => {

  if (action.type === 'SET_SIZE') {
    return action.size;
  } else {
    return state;
  }

};

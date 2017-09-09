const setCategory = (state = 'alphabet', action) => {

  if (action.type === 'SET_CATEGORY') {
    return action.category;
  } else {
    return state;
  }

};

export default setCategory;

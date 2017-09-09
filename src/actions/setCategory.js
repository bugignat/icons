const setCategory = (category) => (dispatch) => {
  dispatch({
    type: 'SET_CATEGORY',
    category: category
  })
};

export default setCategory;

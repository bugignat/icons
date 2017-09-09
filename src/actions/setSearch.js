const setSearch = (search) => (dispatch) => {
  dispatch({
    type: 'SET_SEARCH',
    search: search
  })
};

export default setSearch;

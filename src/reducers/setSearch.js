const setSearch = (state = '', action) => {

  if (action.type === 'SET_SEARCH') {
    return action.search;
  } else {
    return state;
  }

};

export default setSearch;

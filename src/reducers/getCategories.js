const getCategories = (state = [], action) => {

  if (action.type === 'GET_CATEGORIES') {
    return action.categories;
  } else {
    return state;
  }

};

export default getCategories;

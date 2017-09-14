export const getIcons = (state = [], action) => {

  switch (action.type) {
    case 'GET_CATEGORY_ICONS':
      return action.icons;
    case 'GET_SEARCH_ICONS':
      const searchIcons = [
        {
          subcategory_name: action.term,
          icons: action.icons
        }
      ];
      return searchIcons;
    default:
      return state;
  }

};

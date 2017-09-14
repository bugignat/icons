export const fetchingIcons = (state = false, action) => {

  switch (action.type) {
    case 'FETCHING_ICONS_REQUEST':
      return true;
    case 'FETCHING_ICONS_SUCCESS':
    case 'FETCHING_ICONS_ERROR':
      return false;
    default:
      return state;
  }

};

import Axios from 'axios';

export const apiGetPlatforms = () => {
  return Axios.get('https://api.icons8.com/api/iconsets/v3/platforms')
};

export const apiGetCategories = (platform) => {
  return Axios.get('https://api.icons8.com/api/iconsets/v3/categories', {
    params: {
      platform: platform,
      language: 'en-US'
    }
  })
};

export const apiGetCategoryIcons = (platform, category) => {
  return Axios.get('https://api.icons8.com/api/iconsets/v3/category', {
    params: {
      platform: platform,
      category: category,
      amount: 10000,
      language: 'en-US'
    }
  })
};

export const apiGetSearchIcons = (platform, term) => {
  return Axios.get('https://api.icons8.com/api/iconsets/v3/search', {
    params: {
      platform: platform,
      term: term,
      amount: 10000,
      offset: 0,
      language: 'en-US'
    }
  })
};

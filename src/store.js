import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import platforms from './reducers/getPlatforms';
import platform from './reducers/setPlatform';
import categories from './reducers/getCategories';
import category from './reducers/setCategory';
import search from './reducers/setSearch';
import icons from './reducers/getIcons';
import fetchingIcons from './reducers/fetchingIcons';
import color from './reducers/setColor';
import size from './reducers/setSize';

const Store = () => {
  const appReducer = combineReducers({
    platforms,
    platform,
    categories,
    category,
    search,
    icons,
    fetchingIcons,
    color,
    size
  });

  const middlewares = [thunk];

  middlewares.push(createLogger());

  return createStore(appReducer, applyMiddleware(...middlewares));
};

export default Store;

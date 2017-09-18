import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {getPlatforms as platforms} from './reducers/getPlatforms';
import {setPlatform as platform} from './reducers/setPlatform';
import {getCategories as categories} from './reducers/getCategories';
import {setCategory as category} from './reducers/setCategory';
import {setSearch as search} from './reducers/setSearch';
import {getIcons as icons} from './reducers/getIcons';
import {fetchingIcons} from './reducers/fetchingIcons';
import {setSize as size} from './reducers/setSize';

const Store = () => {
  const appReducer = combineReducers({
    platforms,
    platform,
    categories,
    category,
    search,
    icons,
    fetchingIcons,
    size
  });

  const middlewares = [thunk];

  const loggerOptions = {
    collapsed: true,
    duration: true,
    timestamp: true,
    level: 'info',
  };

  if (process.env.NODE_ENV === 'development') {
    const {createLogger} = require('redux-logger');
    middlewares.push(createLogger({...loggerOptions}));
  }

  return createStore(appReducer, applyMiddleware(...middlewares));
};

export default Store;

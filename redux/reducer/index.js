import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import productReducers from './productReducers';
import likeReducers from './likeReducers';
const rootReducer = combineReducers({
  categoriesReducer,
  productReducers,
  likeReducers
})

export default rootReducer
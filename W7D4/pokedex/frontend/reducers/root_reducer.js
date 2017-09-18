import { combineReducers } from 'redux';
import { entitiesReducer } from './entities_reducer';
import { ItemsReducer } from './items_reducer';
import UIReducer from './ui_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  items: ItemsReducer,
  ui: UIReducer
});

export default rootReducer;

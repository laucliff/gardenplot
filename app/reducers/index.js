import { combineReducers } from 'redux';

import garden from 'reducers/garden';
import drawer from 'reducers/drawer';
import plant from 'reducers/plant';

import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  garden,
  plant,
  drawer,
  routing,
});

export default rootReducer;

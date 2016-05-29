import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import message from 'reducers/message';

import garden from 'reducers/garden';
import drawer from 'reducers/drawer';
import plant from 'reducers/plant';

import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  message,
  garden,
  plant,
  drawer,
  routing,
});

export default rootReducer;

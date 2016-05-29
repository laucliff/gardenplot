import {OPEN_DRAWER, CLOSE_DRAWER, SET_GARDEN_DRAWER_CONTEXT, SELECT_PLANT} from 'types';


export default function message(state = {
  isOpen: false,
  editable: true
}, action = {}) {
  switch (action.type) {
    case OPEN_DRAWER: {
      return Object.assign({}, state, {isOpen: true});
    }
    case CLOSE_DRAWER: {
      return Object.assign({}, state, {isOpen: false});
    }
    case SET_GARDEN_DRAWER_CONTEXT: {
      const squareIndex = {
        squareIndex: action.index,
        selectedPlantIndex: undefined
      };

      return Object.assign({}, state, squareIndex);
    }
    case SELECT_PLANT: {
      return Object.assign({}, state, {selectedPlantIndex: action.selectedPlant});
    }
    default:
      return state;
  }
}

import {OPEN_DRAWER, CLOSE_DRAWER, SET_GARDEN_DRAWER_CONTEXT, SELECT_PLANT} from 'types';
import update from 'react/lib/update';


export default function message(state = {
  isOpen: false,
  editable: true
}, action = {}) {
  switch (action.type) {
    case OPEN_DRAWER: {
      const openState = true;

      return Object.assign({}, state, {isOpen: openState})
      // return update(state, {
      //   drawer: {
      //     isOpen: {
      //       $set: openState
      //     }
      //   }
      // });
    }
    case CLOSE_DRAWER: {
      const openState = false;

      return Object.assign({}, state, {isOpen: openState})
      // return update(state, {
      //   drawer: {
      //     isOpen: {
      //       $set: openState
      //     }
      //   }
      // });
    }
    case SET_GARDEN_DRAWER_CONTEXT: {
      const squareIndex = {
        squareIndex: action.index
      };

      return Object.assign({}, state, squareIndex);

      // return update(state, {
      //   drawer: {
      //     $merge: squareIndex
      //   }
      // });
    }
    case SELECT_PLANT: {
      return Object.assign({}, state, {selectedPlantIndex: action.selectedPlant});
    }
    default:
      return state;
  }
}

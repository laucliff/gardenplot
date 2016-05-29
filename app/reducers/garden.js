import {RESET_GARDEN, UPDATE_GARDEN_SQUARE, SET_GARDEN_DRAWER_CONTEXT} from 'types';
import update from 'react/lib/update';

const newSquare = {
  plantId: 0
};
const defaultPlantId = 0;

export default function garden(state = {
  name: 'New Garden',
  width: 1,
  height: 1,
  squares: [newSquare]
}, action = {}) {
  switch (action.type) {
    case RESET_GARDEN: {
      const name = action.name || state.name;
      const width = action.width || state.width;
      const height = action.height || state.height;
      const squares = [];

      const numSquares = width * height;

      for (let i = 0; i < numSquares; i++) {
        squares.push(newSquare);
      }

      return Object.assign({}, state, { name, width, height, squares });
    }
    case UPDATE_GARDEN_SQUARE: {
      const plant = {
        plantId: action.plant.id || defaultPlantId,
        maturationTime: action.plant.maturationTime,
        datePlanted: new Date(),
        lastWatered: new Date()
      };

      return update(state, {
        squares: {
          [action.squareIndex]: {
            $merge: plant
          }
        }
      });
    }
    default: {
      return state;
    }

  }
}

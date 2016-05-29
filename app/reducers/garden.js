import {RESET_GARDEN, LOAD_GARDEN, UPDATE_GARDEN_SQUARE} from 'types';
import update from 'react/lib/update';

const newSquare = {
  plantId: 0
};
const defaultPlantId = 0;

function parseTimestamps(garden) {

  const newGarden = Object.assign({}, garden);

  newGarden.squares = newGarden.squares.map((square) => {
    const timestamps = ['datePlanted', 'lastWatered'];
    const formatted = {};

    timestamps.forEach((timestamp) => {
      if (square[timestamp]) {
        formatted[timestamp] = new Date(square[timestamp]);
      }
    });

    return Object.assign({}, square, formatted);
  });


  return newGarden;
}

function resetGarden(state, garden) {
  const name = garden.name || state.name;
  const width = garden.width || state.width;
  const height = garden.height || state.height;
  const squares = garden.squares || [];

  if (!squares.length) {
    const numSquares = width * height;

    for (let i = 0; i < numSquares; i++) {
      squares.push(newSquare);
    }
  }

  return Object.assign({}, state, { name, width, height, squares });
}

export default function garden(state = {
  name: 'New Garden',
  width: 1,
  height: 1,
  squares: [newSquare]
}, action = {}) {
  switch (action.type) {
    case RESET_GARDEN: {
      return resetGarden(state, action);
    }
    case LOAD_GARDEN: {
      const parsedGarden = parseTimestamps(action.garden);
      return resetGarden(state, parsedGarden);
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

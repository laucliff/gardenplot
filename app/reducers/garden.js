import {RESET_GARDEN} from 'types';

export default function garden(state = {
  name: 'New Garden',
  width: 1,
  height: 1,
  squares: []
}, action = {}) {
  switch (action.type) {
    case RESET_GARDEN: {

      const name = action.name || state.name;
      const width = action.width || state.width;
      const height = action.height || state.height;
      const squares = [];

      const numSquares = width * height;

      for (let i = 0; i < numSquares; i++) {
        squares.push({
          type: 'testPlant' + i
        });
      }

      return Object.assign({}, state, { name, width, height, squares });
    }
    default: {
      return state;
    }

    // action.index is square index in squares

    // case UPDATE_SQUARE:

    //   let type = 'testPlant';
    //   let plant = {
    //     type: type,
    //     datePlanted: new Date(),
    //     lastWatered: new Date()
    //   }

    //   return Object.assign({}, state, {});
  }
}

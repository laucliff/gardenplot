import * as types from 'types';

export function resetGarden(options) {
  // expecting options to be optional values width, height and name
  return Object.assign({ type: types.RESET_GARDEN }, options);
}

export function loadGarden(garden) {
  return Object.assign({ type: types.LOAD_GARDEN }, {garden});
}

export function updateSquare(squareIndex, plant) {

  return {
    type: types.UPDATE_GARDEN_SQUARE,
    squareIndex,
    plant
  };
}

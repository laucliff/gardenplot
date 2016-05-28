import * as types from 'types';

export function resetGarden(options) {
  // expecting options to be optional values width, height and name
  return Object.assign({ type: types.RESET_GARDEN }, options);
}

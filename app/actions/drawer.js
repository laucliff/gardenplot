import * as types from 'types';

export function setDrawerContext(index) {
  return {
    type: types.SET_GARDEN_DRAWER_CONTEXT,
    index
  };
}

export function openDrawer() {
  return {
    type: types.OPEN_DRAWER
  };
}

export function closeDrawer() {
  return {
    type: types.CLOSE_DRAWER
  };
}

export function selectPlant(selectedPlant) {
  return {
    type: types.SELECT_PLANT,
    selectedPlant
  };
}

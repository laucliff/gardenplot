import {} from 'types';


export default function message(state = {
  plants: [{
    id: 1,
    name: 'Cowhorn Pepper',
    maturationTime: 24,
    imageUrl: ''
  }, {
    id: 2,
    name: 'Jalapeno Pepper',
    maturationTime: 30,
    imageUrl: ''
  }]
}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

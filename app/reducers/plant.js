import {} from 'types';


export default function message(state = {
  plants: [{
    id: 1,
    name: 'Cowhorn Pepper',
    maturationTime: 75,
    light: 'Full Sun',
    description: 'These large, thick-walled cayenne peppers are named for their shape. The fruit turns bright red when mature and are quite hot. The wrinkled fruit are excellent for sauces and drying.',
    imageUrl: ''
  }, {
    id: 2,
    name: 'Jalapeno Pepper',
    maturationTime: 72,
    light: 'Full Sun',
    description: 'Named for the town of Jalapa, Mexico, this is the most popular chile pepper in the United States. Jalapeño produces 3-inch, thick-walled, moderately hot pods with deep green color that matures to a bright red. The skin may show a netting pattern as fruit ages, but it does not affect flavor. Often, the heat of the peppers will vary, even those from the same plant. If peppers grow fast, get plenty of water, and are harvested soon, they may be milder than peppers that stay on the plant a long time, or that develop slowly and under stressful conditions.',
    imageUrl: ''
  }]
}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}

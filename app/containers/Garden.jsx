import React, {Component} from 'react';
import GardenPlot from 'components/GardenPlot';

const garden = {
  name: 'test garden',
  width: 2,
  height: 3,
  plots: [{
    coordinate: [0,0],
    plant: 'testPlant',
    planted: 0,
    maturationTime: 100,
  },{
    coordinate: [0,1],
    plant: 'testPlant2',
    planted: 0,
    maturationTime: 50,
  }]
}

class Garden extends Component {

  render() {
    return (
      <div>
        Garden
        <GardenPlot garden={garden}></GardenPlot>
      </div>
      );
  }

};

export default Garden;

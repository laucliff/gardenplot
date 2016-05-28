import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import GardenPlot from 'components/GardenPlot';
import PlantDrawer from 'components/PlantDrawer';

import { resetGarden } from 'actions/gardens';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';

// const garden = {
//   name: 'test garden',
//   width: 2,
//   height: 3,
//   plots: [{
//     plant: 'testPlant',
//     planted: 0,
//     maturationTime: 100,
//   },{
//     plant: 'testPlant2',
//     planted: 0,
//     maturationTime: 50,
//   }]
// }


class Garden extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     open: false,
  //   }
  // }

  // resetGarden(width = 1, height = 1, name = 'New Garden') {

  //   let garden = {
  //     name: name,
  //     width: width,
  //     height: height,
  //     plots: []
  //   }

  //   let numPlots = width*height;

  //   for (let i = 0; i < numPlots; i++) {
  //     garden.plots.push({
  //       plant: 'testPlant'+i
  //     })
  //   }

  //   return garden;
  // }

  handleToggle = () => this.setState({open: !this.state.open});

  render() {

    let items = [];
    for (let i = 1; i <= 5; i++ ) {
      items.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
    }

    return (
      <div>
        Garden

        <SelectField value={this.props.garden.width} onChange={(e, i, width) => { this.props.resetGarden({width}) }}>
          {items}
        </SelectField>
        X
        <SelectField value={this.props.garden.height} onChange={(e, i, height) => { this.props.resetGarden({height}) }}>
          {items}
        </SelectField>

        <GardenPlot garden={this.props.garden}></GardenPlot>

        <Drawer openSecondary={true} open={false}>
          <PlantDrawer/>
        </Drawer>

      </div>
      );
  }

};

Garden.propTypes = {
  garden: PropTypes.object,
  resetGarden: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    garden: state.garden
  };
}


export default connect(mapStateToProps, { resetGarden })(Garden);


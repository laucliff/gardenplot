import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import GardenPlot from 'components/GardenPlot';
import PlantDrawer from 'components/PlantDrawer';

import { resetGarden } from 'actions/gardens';
import { setDrawerContext } from 'actions/drawer';

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

  handleSelect(key, event, index, value) {
    this.props.setDrawerContext();
    this.props.resetGarden({[key]: value});
  }

  render() {

    let numList = [];
    for (let i = 1; i <= 5; i++ ) {
      numList.push(<MenuItem value={i} key={i} primaryText={`${i}`} />);
    }

    return (
      <div>
        <div>
          <SelectField value={this.props.garden.width} onChange={this.handleSelect.bind(this, 'width')}>
            {numList}
          </SelectField>
          <span> by </span>
          <SelectField value={this.props.garden.height} onChange={this.handleSelect.bind(this, 'height')}>
            {numList}
          </SelectField>
        </div>

        <GardenPlot garden={this.props.garden}></GardenPlot>

        <Drawer openSecondary={true} open={this.props.drawerOpen}>
          <PlantDrawer squareIndex={this.props.squareIndex}/>
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
    squareIndex: state.drawer.squareIndex,
    drawerOpen: state.drawer.isOpen,
    garden: state.garden
  };
}


export default connect(mapStateToProps, { resetGarden, setDrawerContext })(Garden);



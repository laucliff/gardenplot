import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import GardenPlot from 'components/GardenPlot';
import PlantDrawer from 'components/PlantDrawer';

import { resetGarden, loadGarden } from 'actions/gardens';
import { setDrawerContext } from 'actions/drawer';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import RaisedButton from 'material-ui/RaisedButton';

const demoGarden = {
   "name":"Demo Garden",
   "width":3,
   "height":2,
   "squares":[
      {
         "plantId":0
      },
      {
         "plantId":1,
         "maturationTime":75,
         "datePlanted":"2016-05-29T22:49:01.530Z"
      },
      {
         "plantId":2,
         "maturationTime":72,
         "datePlanted":"2016-05-11T22:49:05.377Z"
      },
      {
         "plantId":2,
         "maturationTime":72,
         "datePlanted":"2016-04-23T22:49:09.533Z"
      },
      {
         "plantId":2,
         "maturationTime":72,
         "datePlanted":"2016-04-05T22:49:13.741Z"
      },
      {
         "plantId":1,
         "maturationTime":75,
         "datePlanted":"2016-03-13T22:49:17.230Z"
      }
   ]
}


class Garden extends Component {

  demoGarden() {
    this.props.loadGarden(demoGarden)
  }

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
        <RaisedButton label={'Demo Garden'} onClick={this.demoGarden.bind(this)} />
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

function mapStateToProps(state) {
  return {
    squareIndex: state.drawer.squareIndex,
    drawerOpen: state.drawer.isOpen,
    garden: state.garden
  };
}


export default connect(mapStateToProps, { resetGarden, loadGarden, setDrawerContext })(Garden);



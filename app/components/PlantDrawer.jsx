import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateSquare} from 'actions/gardens';
import {selectPlant} from 'actions/drawer';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const plants = [{
  id: 1,
  name: 'Cowhorn Pepper',
  maturationTime: 24,
  imageUrl: ''
},{
  id: 2,
  name: 'Jalapeno Pepper',
  maturationTime: 30,
  imageUrl: ''
}]

class PlantDrawer extends Component {

      // <div className={cx('gardensquare')} onClick={() => this.props.updateSquare(this.props.index)}>
      // <div onClick={this.props.updateSquare.bind(this, this.props.squareIndex)}>plant</div>

  plantPreview(plant) {
    return (
      <div>
        <div>
          {plant.name}
        </div>
        <div>
          {plant.maturationTime}
        </div>
      </div>
    );
  }

  unplantedView() {

    const plantIndex = this.props.selectedPlantIndex;
    const plantItems = plants.map((plant, index) => { return <MenuItem value={index} key={plant.id} primaryText={plant.name} />})
    const plantInfo = (typeof plantIndex !== 'undefined') ? this.plantPreview(plants[plantIndex]) : undefined

    return (
      <div>
        Plant a seed.

        <SelectField value={plantIndex} onChange={(e, i, v) => {this.props.selectPlant(v)}}>
          {plantItems}
        </SelectField>

        {plantInfo}

      </div>
    );

  }

  plantedView() {

    return (
        <div>
          <div> Plant Drawer </div>
          <div>Type: {this.props.currentSquare.type}</div>
          <div onClick={() => this.props.updateSquare(this.props.squareIndex)}>plant</div>
        </div>
      );

  }

  render() {
    if (!this.props.currentSquare) {
      return (
          <div>
            No Garden Square selected.
          </div>
        );
    } else if (!this.props.currentSquare.type) {
      return this.unplantedView.bind(this)();
    } else {
      return this.plantedView.bind(this)();
    }
  }
}

function mapStateToProps(state, ownProps) {

  let currentSquare;
  if (state.garden.squares && (ownProps.squareIndex != undefined)) {
    currentSquare = state.garden.squares[ownProps.squareIndex];
  }


  return {
    currentSquare,
    selectedPlantIndex: state.drawer.selectedPlantIndex
  };
}

export default connect(mapStateToProps, {updateSquare, selectPlant})(PlantDrawer);

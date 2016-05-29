import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateSquare} from 'actions/gardens';
import {selectPlant} from 'actions/drawer';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class PlantDrawer extends Component {

  millToDays(milliseconds) {
   return milliseconds / (1000*60*60*24);
  }

  daysToMature(square) {
    return Math.round(square.maturationTime - this.millToDays(Date.now() - square.datePlanted))
  }

  plantPreview(plant) {

    if (!plant) {
      return;
    }

    return (
      <div>
        <div>
          Matures in {plant.maturationTime} days.
        </div>

      </div>
    );
  }

  emptyView() {
    return (
        <div>
          No Garden Square selected.
        </div>
      );
  }

  unplantedView() {

    const plants = this.props.plants;
    const plantItems = plants.map((plant, index) => { return <MenuItem value={index} key={plant.id} primaryText={plant.name} />})

    return (
      <div>
        Plant a seed.

        <SelectField value={this.props.selectedPlantIndex} onChange={(e, i, v) => {this.props.selectPlant(v)}}>
          {plantItems}
        </SelectField>

        <div>
          {this.plantPreview(this.props.selectedPlant)}
          <RaisedButton label={'PLANT'} disabled={(!this.props.selectedPlant)} onClick={() => this.props.updateSquare(this.props.squareIndex, this.props.selectedPlant)} />
        </div>
      </div>
    );

  }

  plantedView() {
    const plantName = this.props.selectedPlant.name;
    const daysToMature = this.daysToMature(this.props.currentSquare);
    const datePlanted = this.props.currentSquare.datePlanted.toDateString();

    return (
        <div>
          <div> {plantName} </div>
          <div> Planted on {datePlanted} </div>
          <div>Matures in {daysToMature} days.</div>
        </div>
      );
  }

  render() {
    if (!this.props.currentSquare) {
      return this.emptyView.bind(this)();
    } else if (!this.props.currentSquare.plantId) {
      return this.unplantedView.bind(this)();
    } else {
      return this.plantedView.bind(this)();
    }
  }
}

function mapStateToProps(state, ownProps) {

  const currentSquare = state.garden.squares[ownProps.squareIndex];
  const plants = state.plant.plants;
  const selectedPlantIndex = state.drawer.selectedPlantIndex;
  const selectedPlant = (currentSquare && currentSquare.plantId) ?
    plants.find((plant)=>{ return (plant.id == currentSquare.plantId) }) :
    plants[selectedPlantIndex];

  return {
    plants,
    currentSquare,
    selectedPlantIndex,
    selectedPlant
  };
}

export default connect(mapStateToProps, {updateSquare, selectPlant})(PlantDrawer);

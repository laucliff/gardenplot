import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateSquare} from 'actions/gardens';
import {selectPlant} from 'actions/drawer';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';

class PlantDrawer extends Component {

  millToDays(milliseconds) {
   return milliseconds / (1000*60*60*24);
  }

  // Where is best practice location for helper function like this? bound to store? inserted in mapStateToProps?
  daysToMature(square) {
    return Math.round(square.maturationTime - this.millToDays(Date.now() - square.datePlanted))
  }

  // Small Card to preview plant data
  plantPreview(plant) {

    // Don't show anything if no currently selected plant.
    if (!plant) {
      return;
    }

    return (
      <ListItem disabled={true}>
          <p>Plant in {plant.light}.</p>
          <p>Matures in {plant.maturationTime} days.</p>
          <p>{plant.description}</p>
      </ListItem>
    );
  }

  // Drawer view when no square is selected.
  emptyView() {
    return (
        <List>
          <ListItem disabled={true}>No Garden Square selected.</ListItem>
        </List>
      );
  }

  // Drawer view when selected square is currently dirt.
  unplantedView() {

    const plants = this.props.plants;
    const plantItems = plants.map((plant, index) => { return <MenuItem value={index} key={plant.id} primaryText={plant.name} />})

    return (
      <List>
        <ListItem disabled={true}>Plant a seed.</ListItem>
        <ListItem disabled={true}>
          <SelectField value={this.props.selectedPlantIndex} onChange={(e, i, v) => {this.props.selectPlant(v)}}>
            {plantItems}
          </SelectField>
        </ListItem>
        {this.plantPreview(this.props.selectedPlant)}
        <ListItem disabled={true}>
            <RaisedButton label={'PLANT'} fullWidth={true} disabled={(!this.props.selectedPlant)} onClick={() => this.props.updateSquare(this.props.squareIndex, this.props.selectedPlant)} />
        </ListItem>
      </List>
    );

  }

  // Drawer view when square is currently planted.
  plantedView() {
    const plantName = this.props.selectedPlant.name;
    const daysToMature = this.daysToMature(this.props.currentSquare);
    const datePlanted = this.props.currentSquare.datePlanted.toDateString();

    return (
        <List>
          <ListItem primaryText={plantName} disabled={true}/>
          <ListItem disabled={true}>Planted on {datePlanted}</ListItem>
          <ListItem disabled={true}>Matures in {daysToMature} days.</ListItem>
        </List>
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

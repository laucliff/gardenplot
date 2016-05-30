import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import _ from 'lodash';

import classNames from 'classnames/bind';
import styles from 'css/components/gardensquare';

import {setDrawerContext, openDrawer} from 'actions/drawer';

const cx = classNames.bind(styles);

class GardenSquare extends Component {


  activateDrawer = () => {
    this.props.setDrawerContext(this.props.index)
    this.props.openDrawer()
  }

  // Get the ratio colour between two points with rounding
  // Ratio is 0 to 1
  ratioColor(fromColor, toColor, ratio) {
    // Turn string hashcode into triplet of base 10 values
    let coordify10 = function(hexCode) {
     // Strip pound sign
     if (hexCode.charAt(0) === '#') hexCode = hexCode.substring(1);

     return [
       parseInt(hexCode.substring(0, 2), 16),
       parseInt(hexCode.substring(2, 4), 16),
       parseInt(hexCode.substring(4, 6), 16)
     ];
    }

    // Turn coordinates back into hex code
    let hexify = function(coordinates) {
     return _.reduce(coordinates, (hexCode, coordinate) => {
       let code = coordinate.toString(16)
       if (code.length < 2) code = '0' + code;
       return hexCode + code;
     }, '#')
    }

    let ri = function(from, to, ratio) {
      return Math.round(((to - from) * ratio) + from)
    }

    let hexFrom = coordify10(fromColor);
    let hexTo   = coordify10(toColor);

    let red   = ri(hexFrom[0], hexTo[0], ratio)
    let green = ri(hexFrom[1], hexTo[1], ratio)
    let blue  = ri(hexFrom[2], hexTo[2], ratio)

    return hexify([red, green, blue])
  }

  percentColor(square) {

    const brown = '#663300';
    const green = '#006600';
    const ratio = Math.min((Date.now() - square.datePlanted) / (square.maturationTime * 1000*60*60*24), 1)

    if (!ratio){
      return {};
    } else {
      return {backgroundColor: this.ratioColor(brown, green, ratio)}
    }

  }

  percentGrown(square) {
    const growTime = Date.now() - square.datePlanted;
    const maturationTime = square.maturationTime * 1000*60*60*24;

    if (!square.maturationTime) {
      return;
    } else if (growTime >= maturationTime) {
      return (<div>=)</div>);
    } else {
      const percentage = Math.round(100 * (growTime / maturationTime));
      return (<div>{percentage}%</div>);
    }
  }


  render() {

    let classNames = ['gardensquare'];
    if (this.props.isActive) classNames.push('active')

    return (
      <div className={cx(classNames)} style={Object.assign({}, this.percentColor(this.props.square))} onClick={this.activateDrawer}>
        {this.percentGrown(this.props.square)}
      </div>);
  }

};


function mapStateToProps(state, ownProps) {
  return {
    isActive: state.drawer.squareIndex == ownProps.index
  };
}

export default connect(mapStateToProps, { setDrawerContext, openDrawer })(GardenSquare);


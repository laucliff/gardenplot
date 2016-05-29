import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import classNames from 'classnames/bind';
import styles from 'css/components/gardensquare';

import {setDrawerContext, openDrawer} from 'actions/drawer';

const cx = classNames.bind(styles);

class GardenSquare extends Component {


  activateDrawer = () => {
    this.props.setDrawerContext(this.props.index)
    this.props.openDrawer()
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
      <div className={cx(classNames)} onClick={this.activateDrawer}>
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


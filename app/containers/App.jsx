import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/main';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const cx = classNames.bind(styles);


/*
 * React-router's <Router> component renders <Route>'s
 * and replaces `this.props.children` with the proper React Component.
 *
 * Please refer to `routes.jsx` for the route config.
 *
 * A better explanation of react-router is available here:
 * https://github.com/rackt/react-router/blob/latest/docs/Introduction.md
 */

const App = ({children}) => {



  return (
    <MuiThemeProvider>
      <div className={cx('app')}>
          {children}
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  children: PropTypes.object
};

export default App;

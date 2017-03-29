import React, { PropTypes } from 'react';
import Menu from './common/Menu';

const App = ({ children }) => {
  let color = 'tomato';
  switch (window.location.pathname) {
    case '/blog':
      color = '#65efd6';
      break;

    case '/about':
      color = 'orange';
      break;

    default:
      color = 'cornflowerblue';
      break;
  }
  const style = {
    backgroundColor: color,
    height: '100%',
    position: 'absolute',
  };

  return (
    <div className="col-xs-12" style={style}>
      <Menu color={color} />
      {children}
    </div>
  );
};

App.defaultProps = {
  children: null,
};

App.propTypes = {
  /* children PropTypes - https://github.com/yannickcr/eslint-plugin-react/issues/7 */
  children: React.PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]),
};

export default App;

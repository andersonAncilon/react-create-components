module.exports = {
  template: (style, name) => `
  import React from 'react';
  import PropTypes from 'prop-types';
  import '${style}';

  const ComponentName = props => {
    return (
      <div>
        <h2>New Component</h2>
      </div>
    );
  };

  ${name}.propType = {};
  ${name}.defaultProps = {};
  
  export default ComponentName;`
};

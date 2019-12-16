module.exports = {
  template: (style, userName, createdAt) => `
${userName && `/*-------- CREATED BY: ${userName} IN: ${createdAt}--------*/`}
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

ComponentName.propType = {};
ComponentName.defaultProps = {};
  
export default ComponentName;`
};

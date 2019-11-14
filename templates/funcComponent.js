module.exports = {
  template: style => `
  import React from 'react';
  import '${style}';

  const ComponentName = props => {
    return (
      <div>
        <h2>New Component</h2>
      </div>
    );
  };
  
  export default ComponentName;
    `
};

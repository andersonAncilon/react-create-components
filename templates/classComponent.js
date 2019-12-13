module.exports = {
  template: (style, userName) => `
${userName && `/*-------- CREATED BY: ${userName} --------*/`}
import React from 'react';
import './${style}';

class ComponentName {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div>
        <h2>New component</h2>
      </div>
    );
  }
}

ComponentName.propType = {};
ComponentName.defaultProps = {};
  
export default ComponentName;`
};

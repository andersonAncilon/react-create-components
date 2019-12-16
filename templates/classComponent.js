module.exports = {
  template: (style, userName, createdAt) => `
${userName && `/*-------- CREATED BY: ${userName} IN: ${createdAt}--------*/`}
import React from 'react';
import './${style}';

class ComponentName extends React.PureComponent {
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

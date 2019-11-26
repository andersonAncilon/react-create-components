module.exports = {
  template: (style, name) => `
  import React from 'react';
  import '${style}';

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

  ${name}.propType = {};
  ${name}.defaultProps = {};
  
  export default ComponentName;
      `
};

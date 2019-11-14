const { join } = require("path");

module.exports = {
  resolver: (rootPath, componentPath, componentName, fileType) => {
    return join(
      rootPath,
      componentPath,
      componentName,
      `${componentName}${fileType}`
    );
  }
};

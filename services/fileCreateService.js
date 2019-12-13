const { resolver } = require("../helpers/componentPathResolver");
const funcComponent = require("../templates/funcComponent");
const classComponent = require("../templates/classComponent");
const fs = require("fs");

module.exports = {
  fileCreate: (type, componentDir, name, rootDir, userName) => {
    const componentPath = resolver(rootDir, componentDir, name, ".js");
    const stylePath = resolver(rootDir, componentDir, name, ".scss");
    const content =
      type === "func"
        ? funcComponent.template(`${name}.scss`, userName)
        : classComponent.template(`${name}.scss`, userName);

    fs.writeFileSync(componentPath, content);
    fs.writeFileSync(stylePath, ".container {}");
  },
  createIfNoExist: (file, shouldThrowError, errorMessage) => {
    if (!fs.existsSync(file)) {
      fs.mkdirSync(file);
    } else {
      if (shouldThrowError) throw new Error(errorMessage);
    }
  }
};

const { resolver } = require("../helpers/componentPathResolver");
const funcComponent = require("../templates/funcComponent");
const classComponent = require("../templates/classComponent");
const fs = require("fs");

module.exports = {
  fileCreate: (type, componentDir, name, rootDir) => {
    const componentPath = resolver(rootDir, componentDir, name, ".js");
    const stylePath = resolver(rootDir, componentDir, name, ".scss");
    const content =
      type === "func"
        ? funcComponent.template(`${name}.scss`)
        : classComponent.template(`${name}.scss`);

    fs.writeFileSync(componentPath, content);
    fs.writeFileSync(stylePath, ".container {}");
  }
};

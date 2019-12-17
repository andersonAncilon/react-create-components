const { resolver } = require("../helpers/componentPathResolver");
const funcComponent = require("../templates/funcComponent");
const classComponent = require("../templates/classComponent");
const test = require("../templates/test");
const fs = require("fs");
const { join } = require("path");

module.exports = {
  componentCreate: (type, componentDir, name, rootDir, userName) => {
    const componentPath = resolver(rootDir, componentDir, name, ".js");
    const stylePath = resolver(rootDir, componentDir, name, ".scss");
    const createdAt = new Date().toLocaleDateString("pt-br");
    const content =
      type === "stf"
        ? classComponent.template(`${name}.scss`, userName, createdAt)
        : funcComponent.template(`${name}.scss`, userName, createdAt);

    fs.writeFileSync(componentPath, content);
    fs.writeFileSync(stylePath, ".container {}");
  },
  testCreate: (testDir, testName) => {
    const testPath = join(testDir, "", `${testName}.spec.js`);
    const content = test.template(testName);
    fs.writeFileSync(testPath, content);
  },
  createIfNoExist: (path, shouldThrowError, errorMessage) => {
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    } else {
      if (shouldThrowError) throw new Error(errorMessage);
    }
  }
};

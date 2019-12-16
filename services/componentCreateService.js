const {
  componentCreate,
  testCreate
} = require("../services/fileCreateService");

module.exports = {
  createComponentAndTest: props => {
    const { type, componentDir, name, rootDir, userName, finalTestDir } = props;

    componentCreate(type, componentDir, name, rootDir, userName);
    testCreate(finalTestDir, name);
  }
};

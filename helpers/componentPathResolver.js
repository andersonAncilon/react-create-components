const { join } = require("path");

const resolver = (rootPath, componentPath, componentName, fileType) => {
  return join(
    rootPath,
    componentPath,
    componentName,
    `${componentName}${fileType}`
  );
};

const createFiles = (name, options) => {
  const chalk = require("chalk");
  const {
    createIfNoExist,
    checkRootPathFile
  } = require("../services/fileService");
  const {
    createComponentAndTest
  } = require("../services/componentCreateService");
  const { getUserName } = require("../services/gitService");
  const {
    STATELESS_COMPONENT_DIR,
    STATEFULL_COMPONENT_DIR,
    COMPONENT_ROOT_DIR,
    TEST_DIR
  } = require("../constants/paths");

  try {
    const { type } = options;

    // Determina qual o tipo de componente a ser criado
    const componentDir =
      options.type === "class"
        ? STATEFULL_COMPONENT_DIR
        : STATELESS_COMPONENT_DIR;

    // Determina o diretório raiz do componente
    const rootDir = join(process.cwd(), checkRootPathFile() || "");
    // Determina o diretório raiz dos testes
    const testDir = join(process.cwd(), TEST_DIR);
    // Busca o usuário do git
    const userName = getUserName();

    // Cria as pastas de componente e teste, caso não existam (~/src, ~/__tests__)
    createIfNoExist(rootDir);
    createIfNoExist(testDir);

    // Cria a pasta do componente e do teste
    createIfNoExist(join(rootDir, componentDir));
    createIfNoExist(join(testDir, componentDir));

    // Cria o componente, caso não exista
    createIfNoExist(
      join(rootDir, componentDir, name),
      true,
      "component already exist!!!"
    );
    const finalTestDir = join(testDir, componentDir);

    switch (type) {
      case "func":
        createComponentAndTest({
          type,
          componentDir,
          name,
          rootDir,
          userName,
          finalTestDir
        });
        break;
      case "class":
        createComponentAndTest({
          type,
          componentDir,
          name,
          rootDir,
          userName,
          finalTestDir
        });
        break;
      default:
        createComponentAndTest({
          type,
          componentDir,
          name,
          rootDir,
          userName,
          finalTestDir
        });
        break;
    }

    console.log(chalk.green(`Component ${name} created!`));
  } catch (error) {
    console.log(chalk.red(`Component ${name} not created! Reason: ${error})}`));
  }
};

module.exports = {
  resolver,
  createFiles
};

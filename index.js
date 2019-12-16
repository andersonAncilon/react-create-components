#!/usr/bin/env node
const program = require("commander");
const package = require("./package.json");
const { join } = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { createIfNoExist } = require("./services/fileCreateService");
const { createComponentAndTest } = require("./services/componentCreateService");
const { getUserName } = require("./services/gitService");
const {
  STATELESS_COMPONENT_DIR,
  STATEFULL_COMPONENT_DIR,
  COMPONENT_ROOT_DIR,
  TEST_DIR
} = require("./constants/paths");

program.version(package.version);

program
  .command("component <name>")
  .description("Create a component based on templates.")
  .option("-t, --type [type]", "Create a Functional or Class component")
  .action((name, options) => {
    try {
      const { type } = options;

      // Determina qual o tipo de componente a ser criado
      const componentDir =
        options.type === "func"
          ? STATELESS_COMPONENT_DIR
          : STATEFULL_COMPONENT_DIR;

      // Determina o diretório raiz do componente
      const rootDir = join(process.cwd(), COMPONENT_ROOT_DIR);
      debugger;
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
      console.log(
        chalk.red(`Component ${name} not created! Reason: ${error})}`)
      );
    }
  });

program.parse(process.argv);

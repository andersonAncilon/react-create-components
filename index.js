#!/usr/bin/env node

const program = require("commander");
const package = require("./package.json");
const { join } = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { fileCreate, createIfNoExist } = require("./services/fileCreateService");
const { getUserName } = require("./services/gitService");

program.version(package.version);

program
  .command("component <name>")
  .description("Create a component based on templates.")
  .option("-t, --type [type]", "Create a Functional or Class component")
  .action((name, options) => {
    try {
      const componentDir = options.type === "func" ? "components" : "pages";
      const rootDir = join(process.cwd(), "src");
      const userName = getUserName();
      createIfNoExist(rootDir);

      createIfNoExist(join(rootDir, componentDir));

      createIfNoExist(
        join(rootDir, componentDir, name),
        true,
        "component already exist!!!"
      );

      console.log(userName);

      switch (options.type) {
        case "func":
          fileCreate(options.type, componentDir, name, rootDir, userName);
          break;
        case "class":
          fileCreate(options.type, componentDir, name, rootDir, userName);
          break;
        default:
          fileCreate(options.type, componentDir, name, rootDir, userName);
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

#!/usr/bin/env node

const program = require("commander");
const package = require("./package.json");
const { join } = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { resolver } = require("./helpers/componentPathResolver");
const { fileCreate } = require("./services/fileCreateService");

program.version(package.version);

program
  .command("create-component <name>")
  .description("Create a component based on templates.")
  .option("-t, --type [type]", "Create a Functional or Class component")
  .action((name, options) => {
    try {
      const componentDir = options.type === "func" ? "components" : "pages";

      if (!fs.existsSync(componentDir)) {
        fs.mkdirSync(componentDir);
      }

      fs.mkdirSync(join(__dirname, componentDir, name));

      switch (options.type) {
        case "func":
          fileCreate(options.type, componentDir, name, __dirname);
          break;
        case "class":
          fileCreate(options.type, componentDir, name, __dirname);
          break;
        default:
          fileCreate(options.type, componentDir, name, __dirname);
          break;
      }

      console.log(`${chalk.green("Component created!")}`);
    } catch (error) {
      console.log(`${chalk.red("Component not created! Reason: " + error)}`);
    }
  });

program.parse(process.argv);

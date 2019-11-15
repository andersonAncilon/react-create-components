#!/usr/bin/env node

const program = require("commander");
const package = require("./package.json");
const { join } = require("path");
const fs = require("fs");
const chalk = require("chalk");
const { fileCreate } = require("./services/fileCreateService");

program.version(package.version);

program
  .command("component <name>")
  .description("Create a component based on templates.")
  .option("-t, --type [type]", "Create a Functional or Class component")
  .action((name, options) => {
    try {
      const componentDir = options.type === "func" ? "components" : "pages";

      if (!fs.existsSync(join(process.cwd(), componentDir))) {
        fs.mkdirSync(join(process.cwd(), componentDir));
      }

      fs.mkdirSync(join(process.cwd(), componentDir, name));

      switch (options.type) {
        case "func":
          
          fileCreate(options.type, componentDir, name, process.cwd());
          break;
        case "class":
          fileCreate(options.type, componentDir, name, process.cwd());
          break;
        default:
          fileCreate(options.type, componentDir, name, process.cwd());
          break;
      }

      console.log(chalk.green(`Component ${name} created!`));
    } catch (error) {
      console.log(chalk.red(`Component ${name} not created! Reason: ${error})}`));
    }
  });

program.parse(process.argv);

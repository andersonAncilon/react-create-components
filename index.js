#!/usr/bin/env node
const program = require("commander");
const package = require("./package.json");
const inquirer = require("inquirer");
const { createRootPath, checkRootPathFile } = require("./services/fileService");
const { createFiles } = require("./helpers/componentPathResolver");

program.version(package.version);

program
  .command("rootpath")
  .description("Set the root path for creating the components.")
  .action(name => {
    const answer = inquirer.prompt([
      {
        type: "input",
        name: "PATH",
        message: "What is your root dir?(Ex: /src/myProject)",
        validate: value => (value ? true : "Please, type your root dir.")
      }
    ]);
    return answer.then(res => {
      createRootPath(res.PATH);
    });
  });

program
  .command("component <name>")
  .description(
    "Create a component based on templates (class for statefull and func to stateless)."
  )
  .option("-t, --type [type]", "Create a Functional or Class component.")
  .action((name, options) => {
    if (!checkRootPathFile()) {
      const answer = inquirer.prompt([
        {
          type: "input",
          name: "PATH",
          message: "What is your root dir?(Ex: /src/myProject)",
          validate: value => (value ? true : "Please, type your root dir.")
        }
      ]);
      return answer.then(res => {
        createRootPath(res.PATH);
        createFiles(name, options);
      });
    }
    return createFiles(name, options);
  });

program.parse(process.argv);

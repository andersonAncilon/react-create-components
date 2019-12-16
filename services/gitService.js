const { spawnSync } = require("child_process");

module.exports = {
  getUserName: () => {
    const { stdout } = spawnSync("git", ["config", "--global", "--list"]);

    const results = stdout.toString().match(/((name=)([a-zA-z]{1,}))/);
    const position = results.length - 1;

    return results[position];
  }
};
spawnSync;

const core = require('@actions/core');
const exec = require('@actions/exec');

async function run() {
  try {
    const version = core.getInput('version');
    await exec.exec(`pip install devpi-client==${version}`);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

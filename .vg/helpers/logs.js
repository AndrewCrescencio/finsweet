const chalk = require('chalk')

const logPrimary = (msg) => {
  console.log(chalk.white(msg))
}

const logError = (msg) => {
  console.error(chalk.red(msg))
}

const logWarn = (msg) => {
  console.warn(chalk.yellow(msg))
}

const logSuccess = (msg) => {
  console.log(chalk.green(msg))
}

module.exports = {
  logPrimary,
  logError,
  logWarn,
  logSuccess,
}

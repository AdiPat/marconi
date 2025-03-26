#!/usr/bin/env node

import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config({
  path: ".env",
  override: true,
});

/**
 * The main function to run the shell agent CLI.
 */
async function run() {
  console.log(chalk.green("Starting Marconi CLI..."));
}

if (require.main === module) {
  run();
}

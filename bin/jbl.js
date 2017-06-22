#!/usr/bin/env node

const package = require('../package');

require('commander')
  .version(package.version)
  .usage('<command> [options]')
  .command('dev', 'launch the hot dev module replacement dev server.')
  .command('build', 'build the project')
  .parse(process.argv);

#!/usr/bin/env node

import { Command } from 'commander';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('../package.json');

const commander = new Command();

const Foo = (): void => {
  console.log('Bar');
};

try {
  // Version
  commander.version(pkg.version);

  // Foo
  commander
    .command('Foo')
    .description('Foo 就完事了')
    .action(Foo);

  // exec
  commander.parse(process.argv);
} catch (error) {
  console.log(error);
  process.exit(1);
}


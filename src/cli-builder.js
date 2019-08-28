import commander from 'commander';
import { version, description } from '../package.json';

const program = new commander.Command();

program
  .version(version)
  .description(description)
  .option('-f, --f [format]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action(() => {
    console.log('hey');
  });

export default () => program.parse(process.argv);

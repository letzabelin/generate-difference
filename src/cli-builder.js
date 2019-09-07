import commander from 'commander';
import { version, description } from '../package.json';
import gendiff from '.';

const program = new commander.Command();

program
  .version(version)
  .description(description)
  .option('-f, --f [format]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(gendiff(firstConfig, secondConfig));
  });

export default () => program.parse(process.argv);

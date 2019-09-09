import commander from 'commander';
import { version, description } from '../package.json';
import gendiff from '.';

export default () => commander
  .version(version)
  .description(description)
  .option('-f, --f [format]', 'Output format')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(gendiff(firstConfig, secondConfig));
  })
  .parse(process.argv);

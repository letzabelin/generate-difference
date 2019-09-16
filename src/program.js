import commander from 'commander';
import { version, description } from '../package.json';
import gendiff from '.';

export default () => commander
  .version(version)
  .description(description)
  .option('-f, --format <type>', 'Output format [pretty]', 'pretty')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstConfig, secondConfig) => {
    console.log(gendiff(firstConfig, secondConfig, commander.format));
  })
  .parse(process.argv);

import commander from 'commander';
import { version, description } from '../package.json';
import gendiff from '.';

export default () => commander
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'Output format', 'pretty')
  .arguments('<firstConfigFile> <secondConfigFile>')
  .action((firstConfigFile, secondConfigFile) => {
    console.log(gendiff(firstConfigFile, secondConfigFile, commander.format));
  })
  .parse(process.argv);

import commander from 'commander';
import { version, description } from '../package.json';
import gendiff from '.';

export default () => commander
  .version(version)
  .description(description)
  .option('-f, --format [type]', 'Output format', 'pretty')
  .arguments('<firstConfig> <secondConfig>')
  .action((firstFilePath, secondFilePath) => {
    console.log(gendiff(firstFilePath, secondFilePath, commander.format));
  })
  .parse(process.argv);

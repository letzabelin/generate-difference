import commander from 'commander';
import { version, description } from '../package.json';

const program = new commander.Command();

program
  .version(version)
  .description(description)
  .action(() => {
    console.log('hey');
  });

export default () => program.parse(process.argv);

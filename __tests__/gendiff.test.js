import fs from 'fs';
import path from 'path';
import gendiff from '../src';

test('diff json', () => {
  const pathToFile1 = path.resolve(__dirname, '__fixtures__/before.json');
  const pathToFile2 = path.resolve(__dirname, '__fixtures__/after.json');
  const pathToResFile = path.resolve(__dirname, '__fixtures__/diff-json.txt');
  const diffFromFile = fs.readFileSync(pathToResFile, 'utf8');
  const diff = gendiff(pathToFile1, pathToFile2);
  expect(diffFromFile).toEqual(diff);
});

// test('diff yml', () => {
//   const pathToFile1 = path.resolve(__dirname, '__fixtures__/before.yml');
//   const pathToFile2 = path.resolve(__dirname, '__fixtures__/after.yml');
//   const pathToResFile = path.resolve(__dirname, '__fixtures__/diff-yml.txt');
//   const diffFromFile = fs.readFileSync(pathToResFile, 'utf8');
//   const diff = gendiff(pathToFile1, pathToFile2);
//   expect(diffFromFile).toEqual(diff);
// });

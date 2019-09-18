import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const interExtensionNames = ['json', 'yml', 'ini'];

const getFilePath = (extensionNames) => extensionNames.map((extensionName) => ([
  path.resolve(__dirname, `__fixtures__/before.${extensionName}`),
  path.resolve(__dirname, `__fixtures__/after.${extensionName}`),
]));

const getResultPath = (format) => {
  const result = path.resolve(__dirname, `__fixtures__/diff-${format}.txt`);
  return fs.readFileSync(result, 'utf8');
};

test.each(getFilePath(interExtensionNames))(
  'generate difference between two configuration files',
  (before, after) => {
    expect(gendiff(before, after, 'pretty')).toEqual(getResultPath('pretty'));
    expect(gendiff(before, after, 'plain')).toEqual(getResultPath('plain'));
    expect(gendiff(before, after, 'json')).toEqual(getResultPath('json'));
  },
);

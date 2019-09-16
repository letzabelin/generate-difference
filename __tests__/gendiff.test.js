import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const interFormats = ['json', 'yml', 'ini'];

const getFilePath = (formats) => formats.map((element) => ([
  path.resolve(__dirname, `__fixtures__/before.${element}`),
  path.resolve(__dirname, `__fixtures__/after.${element}`),
]));

const getResultPath = (format) => {
  const result = path.resolve(__dirname, `__fixtures__/diff-${format}.txt`);
  return fs.readFileSync(result, 'utf8');
};

test.each(getFilePath(interFormats))(
  'gendiff test',
  (before, after) => {
    expect(gendiff(before, after, 'pretty')).toEqual(getResultPath('pretty'));
    expect(gendiff(before, after, 'plain')).toEqual(getResultPath('plain'));
    expect(gendiff(before, after, 'json')).toEqual(getResultPath('json'));
  },
);

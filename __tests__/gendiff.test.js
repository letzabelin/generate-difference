import fs from 'fs';
import path from 'path';
import gendiff from '../src';

const interFormats = ['json', 'yml', 'ini'];

const getFilePath = (formats) => formats.map((element) => ([
  path.resolve(__dirname, `__fixtures__/before.${element}`),
  path.resolve(__dirname, `__fixtures__/after.${element}`),
]));

const result = fs.readFileSync(path.resolve(__dirname, '__fixtures__/diff-plain.txt'), 'utf8');

test.each(getFilePath(interFormats))(
  'gendiff test',
  (before, after) => {
    expect(gendiff(before, after)).toEqual(result);
  },
);

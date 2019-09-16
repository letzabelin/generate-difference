import fs from 'fs';
import _ from 'lodash';
import path from 'path';
import parse from './parsers';
import render from './formatters';

const getData = (file) => {
  const filePath = path.resolve(file);
  const type = path.extname(filePath).slice(1);
  const obj = fs.readFileSync(filePath, 'utf8');

  return parse(type, obj);
};

const buildAST = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));

  return keys.map((key) => {
    const value1 = data1[key];
    const value2 = data2[key];

    if (value1 instanceof Object && value2 instanceof Object) {
      return { type: 'isObject', key, currentValue: buildAST(value1, value2) };
    }
    if (_.has(data1, key) && !_.has(data2, key)) {
      return { type: 'removed', key, removedValue: value1 };
    }
    if (!_.has(data1, key) && _.has(data2, key)) {
      return { type: 'added', key, currentValue: value2 };
    }
    if (value1 === value2) {
      return { type: 'equal', key, currentValue: value1 };
    }

    return {
      type: 'changed',
      key,
      removedValue: value1,
      currentValue: value2,
    };
  });
};

const gendiff = (file1, file2, format) => {
  const data1 = getData(file1);
  const data2 = getData(file2);
  const diff = buildAST(data1, data2);

  return render(diff, format);
};

export default gendiff;

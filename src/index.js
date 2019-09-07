import fs from 'fs';
import _ from 'lodash';

const indent = '  ';
const indentLarge = '    ';

const gendiff = (firstFile, secondFile) => {
  const firstContent = fs.readFileSync(firstFile, 'utf8');
  const secondContent = fs.readFileSync(secondFile, 'utf8');

  const firstObj = JSON.parse(firstContent);
  const secondObj = JSON.parse(secondContent);

  const keys = _.union(_.keys(firstObj), _.keys(secondObj));

  const res = keys.map((key) => {
    if (_.has(firstObj, key) && _.has(secondObj, key) && firstObj[key] === secondObj[key]) {
      return `${indentLarge}${key}: ${secondObj[key]}`;
    }
    if (_.has(firstObj, key) && _.has(secondObj, key) && firstObj[key] !== secondObj[key]) {
      return `${indent}+ ${key}: ${secondObj[key]}\n${indent}- ${key}: ${firstObj[key]}`;
    }
    if (_.has(firstObj, key) && !_.has(secondObj, key)) {
      return `${indent}- ${key}: ${firstObj[key]}`;
    }
    if (!_.has(firstObj, key) && _.has(secondObj, key)) {
      return `${indent}+ ${key}: ${secondObj[key]}`;
    }

    return '';
  });

  return `{\n${res.join('\n')}\n}`;
};

export default gendiff;

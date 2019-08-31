const fs = require('fs');
const _ = require('lodash');

const indent = '  ';
const newLine = '\n';

const genDiff = (firstFile, secondFile) => {
  const firstContent = fs.readFileSync(firstFile, 'utf8');
  const secondContent = fs.readFileSync(secondFile, 'utf8');

  const firstObj = JSON.parse(firstContent);
  const secondObj = JSON.parse(secondContent);

  const keys = _.union(_.keys(firstObj), _.keys(secondObj));

  return keys.reduce((acc, key) => {
    if (_.has(firstObj, key) && _.has(secondObj, key) && firstObj[key] === secondObj[key]) {
      acc += `${indent}${key}: ${secondObj[key]}${newLine}`;
    } else if (_.has(firstObj, key) && _.has(secondObj, key) && firstObj[key] !== secondObj[key]) {
      acc += `+ ${key}: ${secondObj[key]}${newLine}- ${key}: ${firstObj[key]}${newLine}`;
    } else if (_.has(firstObj, key) && !_.has(secondObj, key)) {
      acc += `- ${key}: ${firstObj[key]}${newLine}`;
    } else if (!_.has(firstObj, key) && _.has(secondObj, key)) {
      acc += `+ ${key}: ${secondObj[key]}`;
    }

    return acc;
  }, '');
};

export default genDiff;

// {
//     host: hexletio
//   + timeout: 20
//   - timeout: 50
//   - proxy: 123.234.53.22
//   + verbose: true
//   - follow: false
// }

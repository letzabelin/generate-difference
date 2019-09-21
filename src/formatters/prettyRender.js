import _ from 'lodash';

const tab = '  ';
const tabStep = 2;

const handleValue = (value, indent) => {
  if (!_.isObject(value)) {
    return value;
  }

  const convertObjectToString = ([key, objectValue]) => `{\n${indent}${tab.repeat(3)}${key}: ${objectValue}\n${indent}${tab}}`;
  return Object.entries(value).map(convertObjectToString);
};

const render = (ast, tabCount) => {
  const convertAstToDiff = ({
    type,
    key,
    removedValue,
    currentValue,
  }) => {
    const indent = tab.repeat(tabCount);

    const types = {
      nested: () => `${indent}${tab}${key}: {\n${render(currentValue, tabCount + tabStep)}\n${indent}${tab}}`,
      equal: () => `${indent}${tab}${key}: ${handleValue(currentValue, indent)}`,
      added: () => `${indent}+ ${key}: ${handleValue(currentValue, indent)}`,
      removed: () => `${indent}- ${key}: ${handleValue(removedValue, indent)}`,
      changed: () => [types.added(), types.removed()],
    };

    return types[type]();
  };

  return _.flatten(ast.map(convertAstToDiff)).join('\n');
};

export default (ast) => `{\n${render(ast, 1)}\n}`;

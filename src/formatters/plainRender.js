import _ from 'lodash';

const handleValue = (value) => {
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  if (_.isObject(value)) {
    return '[complex value]';
  }

  return value;
};

const removeEmptyStrings = (string) => string !== '';

const buildPath = (dir, base) => [dir, base].filter(removeEmptyStrings).join('.');

const render = (ast, path = '') => {
  const convertAstToDiff = ({
    type,
    key,
    removedValue,
    currentValue,
  }) => {
    const fullPath = buildPath(path, key);

    const types = {
      nested: () => render(currentValue, fullPath),
      equal: () => '',
      added: () => `Property '${fullPath}' was added with value: ${handleValue(currentValue)}`,
      removed: () => `Property '${fullPath}' was removed`,
      changed: () => `Property '${fullPath}' was updated. From ${handleValue(removedValue)} to ${handleValue(currentValue)}`,
    };

    return types[type]();
  };

  return ast.map(convertAstToDiff).filter(removeEmptyStrings).join('\n');
};

export default (ast) => render(ast, '');

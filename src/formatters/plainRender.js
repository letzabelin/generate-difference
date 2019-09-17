import _ from 'lodash';

const handler = (element) => {
  if (typeof element === 'string') {
    return `'${element}'`;
  }
  if (_.isObject(element)) {
    return '[complex value]';
  }

  return element;
};

const filterFunc = (e) => e !== '';

const buildPath = (dir, base) => [dir, base].filter(filterFunc).join('.');

const render = (diff, path = '') => {
  const func = ({
    type,
    key,
    removedValue,
    currentValue,
  }) => {
    const fullPath = buildPath(path, key);

    const types = {
      nested: () => render(currentValue, fullPath),
      equal: () => '',
      added: () => `Property '${fullPath}' was added with value: ${handler(currentValue)}`,
      removed: () => `Property '${fullPath}' was removed`,
      changed: () => `Property '${fullPath}' was updated. From ${handler(removedValue)} to ${handler(currentValue)}`,
    };

    return types[type]();
  };

  return diff.map(func).filter(filterFunc).join('\n');
};

export default (diff) => render(diff, '');

const handler = (item) => {
  if (typeof item === 'string') {
    return `'${item}'`;
  }
  if (item instanceof Object) {
    return '[complex value]';
  }

  return item;
};

const buildPath = (dir, base) => [dir, base].filter((e) => e !== '').join('.');

const render = (diff, path = '') => {
  const func = ({
    type,
    key,
    removedValue,
    currentValue,
  }) => {
    const fullPath = buildPath(path, key);

    const types = {
      isObject: () => render(currentValue, fullPath),
      equal: () => '',
      added: () => `Property '${fullPath}' was added with value: ${handler(currentValue)}`,
      removed: () => `Property '${fullPath}' was removed`,
      changed: () => `Property '${fullPath}' was updated. From ${handler(removedValue)} to ${handler(currentValue)}`,
    };

    return types[type]();
  };

  return diff.map(func).filter((e) => e !== '').join('\n');
};

export default (diff) => render(diff, '');

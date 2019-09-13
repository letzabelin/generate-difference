const tab = '  ';
const doubleTab = tab.repeat(2);

const render = (diff) => {
  const func = ({
    type,
    key,
    removedValue,
    currentValue,
  }) => {
    const types = {
      equal: () => `${doubleTab}${key}: ${currentValue}`,
      changed: () => `${tab}+ ${key}: ${currentValue}\n${tab}- ${key}: ${removedValue}`,
      added: () => `${tab}+ ${key}: ${currentValue}`,
      removed: () => `${tab}- ${key}: ${removedValue}`,
    };

    return types[type]();
  };

  return diff.map(func).join('\n');
};

export default (diff) => `{\n${render(diff)}\n}`;

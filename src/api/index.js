const notOverrideMessage = (title, value = null) => {
  const suffix = value ? ' FOR: ' + value : '';
  console.log('NOT OVERRIDE ' + title.upperCase() + suffix);
};

module.exports = {
  notOverrideMessage,
};

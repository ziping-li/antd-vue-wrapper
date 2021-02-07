// @ts-nocheck
const vars = require('../../theme/vars.json');

module.exports = {
  install: function (_less, _pluginManager, functions) {
    functions.add('getNumberVarsToPx', function (key) {
      return vars[key.value] + 'px';
    });
    functions.add('getVars', function (key) {
      return vars[key.value];
    });
  },
};

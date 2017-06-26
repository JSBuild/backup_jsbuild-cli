const base = require('../webpack-base');

module.exports = function() {
  base.config.action.name = 'Develop';
  base.build(base.config);
}

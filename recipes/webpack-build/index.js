const base = require('../webpack-base');

module.exports = function() {
  base.config.action.name = 'Build';
  base.build(base.config);
}

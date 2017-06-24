const base = require('./base');

module.exports = function() {
  base.config.action.name = 'Develop';
  base.build(base.config);
}

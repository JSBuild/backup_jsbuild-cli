var defaultConfig {
  action: {
    name: 'Build'
  },
  recipe: {
    name: "Default"
  }
}

module.exports =  {
  config: defaultConfig,
  build: function (config) {
    console.log('Starting ', config.action.name);
    console.log(config.recipe.name);
  }
}

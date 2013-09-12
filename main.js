module.exports = {
  nodes: function() {
    return require('./nodes');
  },
  twig: function(name) {
    return require('./twig/' + name);
  },
  branch: function(name) {
    return require('./branch/' + name);
  }
};

module.exports = {
  name: "close",
  ns: "mongojs",
  description: "mongojs close",
  phrases: {
    active: "Closing database connection"
  },
  ports: {
    input: {
      db: {
        type: "object",
        title: "mongojs db handle"
      }
    },
    output: {}
  },
  fn: function close(input, $, output, state, done, cb, on) {
    var r = function() {
      $.db.close()
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}
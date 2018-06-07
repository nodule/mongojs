module.exports = {
  name: "db",
  ns: "mongojs",
  description: "mongojs database",
  phrases: {
    active: "Creating mongodb connection: {{input.in}}"
  },
  ports: {
    input: {
      connection_string: {
        type: "string",
        title: "Connection String",
        description: "The connection string should follow the format described in [the mongo connection](http://docs.mongodb.org/manual/reference/connection-string/) string docs",
        require: true
      }
    },
    output: {
      db: {
        type: "function"
      }
    }
  },
  dependencies: {
    npm: {
      mongojs: require('mongojs')
    }
  },
  fn: function db(input, $, output, state, done, cb, on, mongojs) {
    var r = function() {
      output = {
        db: $.create(mongojs($.connection_string))
      }
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}
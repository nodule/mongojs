module.exports = {
  name: "insert",
  ns: "mongojs",
  description: "mongojs insert",
  phrases: {
    active: "Insering document into the collection"
  },
  ports: {
    input: {
      collection: {
        type: "object",
        title: "a mongojs.collection handle",
        required: true,
        readonly: true
      },
      document: {
        type: "object",
        title: "JSON document",
        required: true
      }
    },
    output: {
      error: {
        type: "object"
      },
      docs: {
        type: "object"
      },
      n: {
        type: "object"
      }
    }
  },
  fn: function insert(input, $, output, state, done, cb, on) {
    var r = function() {
      $.collection.insert($.document, function insertCallback(error, docs, n) {
        cb({
          error: error,
          docs: docs,
          n: n
        });
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}
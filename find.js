module.exports = {
  name: "find",
  ns: "mongojs",
  description: "mongojs find",
  phrases: {
    active: "Performing find based on the specified criteria"
  },
  ports: {
    input: {
      collection: {
        type: "function",
        title: "A mongojs.collection handle",
        required: true,
        readonly: true
      },
      criteria: {
        type: "object",
        title: "A mongojs criteria JSON object",
        required: true
      }
    },
    output: {
      error: {
        title: "Error",
        type: "object"
      },
      documents: {
        title: "Documents",
        type: "object"
      }
    }
  },
  fn: function find(input, $, output, state, done, cb, on) {
    var r = function() {
      $.collection.find($.criteria, function findCallback(error, documents) {
        cb({
          error: error,
          documents: documents
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
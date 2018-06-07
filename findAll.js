module.exports = {
  name: "findAll",
  ns: "mongojs",
  description: "MongoJS find all",
  phrases: {
    active: "Finding all documents"
  },
  ports: {
    input: {
      collection: {
        type: "function",
        title: "A mongojs.collection handle",
        required: true,
        readonly: true
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
  fn: function findAll(input, $, output, state, done, cb, on) {
    var r = function() {
      $.collection.findAll(function findAllCallback(error, documents) {
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
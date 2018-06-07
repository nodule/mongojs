module.exports = {
  name: "update",
  ns: "mongojs",
  description: "mongojs update",
  phrases: {
    active: "Updating document"
  },
  ports: {
    input: {
      collection: {
        type: "function",
        title: "a mongojs.collection handle",
        required: true,
        readonly: true
      },
      selector: {
        type: "object",
        title: "Selector",
        required: true
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
  fn: function update(input, $, output, state, done, cb, on) {
    var r = function() {
      $.collection.update($.selector, $.document, function updateCallback(error, docs, n) {
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
module.exports = {
  name: "remove",
  ns: "mongojs",
  description: "mongojs remove",
  phrases: {
    active: "Removing document(s) based on the specified criteria"
  },
  ports: {
    input: {
      collection: {
        type: "object"
      },
      criteria: {
        type: "object"
      }
    },
    output: {
      success: {
        type: "boolean"
      }
    }
  },
  fn: function remove(input, $, output, state, done, cb, on) {
    var r = function() {
      $.collection.remove($.criteria, function removeCallback(success) {
        cb({
          success: success
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
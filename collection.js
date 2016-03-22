module.exports = {
  name: "collection",
  ns: "mongojs",
  description: "mongojs collection",
  phrases: {
    active: "Opening the {{input.collection}} collection"
  },
  ports: {
    input: {
      collection: {
        type: "string",
        title: "Collection",
        description: "The collection name for this database",
        required: true
      },
      db: {
        type: "object",
        title: "Db Handle",
        description: "Expects the `db` port of the mongojs.db node",
        readonly: true,
        required: true
      }
    },
    output: {
      collection: {
        type: "object",
        title: "Db Collection handle",
        readonly: true
      }
    }
  },
  fn: function collection(input, $, output, state, done, cb, on) {
    var r = function() {
      output = {
        collection: $.create($.db.collection($.collection))
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
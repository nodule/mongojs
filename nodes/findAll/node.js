on.input[':start'] = function() {
  input.collection.find(function(err, data) {
    if(err) {
      output({ error: err });
    } else {
      output({ documents: data });
    }
  });
}

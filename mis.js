'use strict';

exports.get = function(event, context, callback) {
  var contents = '{"message":"Oh....... Hey."}';
  var result = {
    statusCode: 200,
    body: contents,
    headers: {'content-type': 'application/json'}
  };

  callback(null, result);
};
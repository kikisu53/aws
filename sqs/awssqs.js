const AWS = require('aws-sdk') //for aws service
AWS.config.update({
  region: "us-west-2"
});
var sqs = new AWS.SQS();
function read(){
  var params = {
    QueueUrl: 'https://sqs.us-west-2.amazonaws.com/328286347281/clifflu-demo', /* required */
    AttributeNames: [
      'All'    
    ],
  };
  sqs.receiveMessage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}

function del(){
}

function write(msg){
  var params = {
    MessageBody: ''+msg, /* required */
    QueueUrl: 'https://sqs.us-west-2.amazonaws.com/328286347281/clifflu-demo', /* required */
  };
  sqs.sendMessage(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });
}


module.exports = {
  read,
  write
}
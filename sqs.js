const crypto = require('./sqs/crypto');
const aws = require('./sqs/awssqs')

// test data: 'hello world'
var queue = [
    {plaintext: 'aGVsbG8gd29ybGQ='},
    {ciphertext: 'RuuIgPGmXDi7798hCXExsw=='}
];
function tttt (){
    while(queue.length>0){
        var data = queue.shift();
        console.log()
        aws.write(data);
    }
}
aws.read();
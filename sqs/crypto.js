const crypto = require('crypto'); //for crypto

// key in type buffer
var key = Buffer.from('DEADBEEF000000000000000000000000','hex');
var way = 'aes-128-ecb';

//cipher.update():把完整的block加密後輸出
//cipher.final():把剩下的不完整block加密後輸出
//buffer(object) 和 base64(5bytes一單位，128=>16bytes=5單位+1bytes)，故這兩者直接相加會出錯

// decode: base64 -> buffer -> base64, using aes128+ecb
function decode(text){
    var buf = Buffer.from(text,'base64'); //base64 -> buffer
    var cipher = crypto.createCipher(way, key);
    var mybuf = Buffer.concat([cipher.update(buf), cipher.final()]); //decode: buffer -> buffer
    return {In:{plaintext: text}, text: buf.toString('utf-8'), Out:{ciphertext: mybuf.toString('base64')}};
}

// encode: base64 -> base64, using aes128+ecb
function encode(text){
    var buf = Buffer.from(text,'base64'); //base64 -> buffer
    var decipher = crypto.createDecipher(way, key);
    var mybuf = Buffer.concat([decipher.update(buf), decipher.final()]); //encode: buffer -> buffer
    return {In:{ciphertext: text}, text: mybuf.toString('utf-8'), Out:{plaintext: mybuf.toString('base64')}};
}

// input is obj, output = {In, text, Out}
function process(obj){
    if(obj['plaintext']!==undefined) return decode(obj['plaintext']);
    if(obj['ciphertext']!==undefined) return encode(obj['ciphertext']);
}

module.exports = {
  process,
}
const AWS = require('aws-sdk');
AWS.config.update({
  region: "us-west-2"
});
var cloudwatch = new AWS.CloudWatch();
function putM(hour, person){
    var params = {
        MetricData: [ /* required */
            {
                MetricName: 'count', /* required */
                Dimensions: [
                    {
                        Name: 'hour', /* required */
                        Value: hour/* required */
                    },
                    {
                        Name: 'person', /* required */
                        Value: person/* required */
                    }
                ],
                StorageResolution: 60, //only 1 or 60
                Timestamp: new Date || 'Wed Dec 31 1969 16:00:00 GMT-0800 (PST)' || 123456789,
                Value: Math.floor((Math.random() * 100) + 1)  //StatisticValues和Value 只能擇一設定
            },
        ],
        Namespace: 'kiki' /* required */
    };
    cloudwatch.putMetricData(params, function(err, data) {
        if (err) return console.log(err, err.stack); // an error occurred
        console.log(data);           // successful response
    });
}

setInterval(() => putM('1', '1'), 5000);
setInterval(() => putM('1', '2'), 10000);
setInterval(() => putM('2', '1'), 20000);
setInterval(() => putM('2', '2'), 40000);
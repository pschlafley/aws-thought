// Load the AWS SDK for node
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
AWS.config.update({ region: 'us-east-2' });
// create S3 service object
const s3 = new AWS.S3({ apiVersion: '2006-03-01' });
// create the parameters for calling createBucket
var bucketParams = {
    Bucket: 'user-images-' + uuidv4()
};
// call S3 to creat the bucket
s3.createBucket(bucketParams, (err, data) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Success');
    }
});
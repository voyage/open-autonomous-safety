const gulp = require('gulp');
const awspublish = require('gulp-awspublish');
const cloudfront = require('gulp-cloudfront-invalidate-aws-publish');

gulp.task('publish', function() {

  // create a new publisher using S3 options
  // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#constructor-property
  var publisher = awspublish.create({
    region: 'us-west-1',
    params: {
      Bucket: 'oas.voyage.auto'
    }
  });

  return gulp.src('./build/**')
    .pipe(publisher.publish())
    .pipe(cloudfront({
      distribution: 'EU054VVB7TQFK',
      indexRootPath: true
    }))
    .pipe(awspublish.reporter());
});
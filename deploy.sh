echo "Building site"

node build.js production

echo "-> Uploading to S3"

aws s3 sync ./build s3://runemadsen.com --profile runemadsen --exclude "*.html" --acl "public-read" --cache-control "max-age=31536000"
aws s3 sync ./build s3://runemadsen.com --profile runemadsen --exclude "*" --include "*.html" --acl "public-read" --cache-control "max-age=300, must-revalidate"

echo "--> Done!"

echo "Building site"

node build.js production

echo "-> Uploading to S3"

# Sync everything that is not HTML to cache for a year
echo "--> Syncing assets"
s3cmd sync --config=.s3cfg --acl-public --guess-mime-type --exclude '*.html' --add-header="Cache-Control: max-age=31536000"  build/ s3://runemadsen.com

# Sync html files last to not provoke CDN to cache 404's on images. Also set 300 seconds cache control
echo "--> Syncing .html"
s3cmd sync --config=.s3cfg --acl-public --mime-type="text/html; charset=utf-8" --exclude '*.*' --include  '*.html' --add-header="Cache-Control: max-age=300, must-revalidate"  build/ s3://runemadsen.com

echo "--> Done!"

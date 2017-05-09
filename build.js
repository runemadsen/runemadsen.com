var Metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');

var production = process.argv[2] == 'production'

// Defaults
// --------------------------------------------

var build = Metalsmith(__dirname)
  .metadata({
    sitename: "Rune Madsen",
    siteurl: "https://runemadsen.com/",
    description: "Rune Madsen is a designer, artist and educator who uses programming languages to create things with the computer.",
    keyword: "algorithmic, graphic, design, systems, generative, rune, madsen, Processing, creative, code, programming, P5.js"
  })
  .source('./src')
  .destination('./build')
  .clean(true)
  .use(collections({
    blog: 'blog/*.md',
    work: 'work/*.md'
  }))
  .use(markdown())
  .use(permalinks({
    relative: false,
    pattern: ':title'//,
    // linksets: [{
    //   match: { collection: 'blog' },
    //   pattern: 'blog/:title'
    // },{
    //   match: { collection: 'work' },
    //   pattern: 'work/:title'
    // }]
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: 'layouts/partials',
    partialExtension: ".html"
  }))

// Production
// --------------------------------------------

if(production) {

}

// Development
// --------------------------------------------

else {

  var watch = require('metalsmith-watch');

  build = build.use(
    watch({
      paths: {
        "src/**/*": true,
        "layouts/**/*": true
      },
      livereload: false
    })
  );

}

build.build(function(err) {
    if (err) throw err;
  });

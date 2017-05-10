var Metalsmith  = require('metalsmith');
var collections = require('metalsmith-collections');
var layouts     = require('metalsmith-layouts');
var markdown    = require('metalsmith-markdown');
var permalinks  = require('metalsmith-permalinks');
var sass        = require('metalsmith-sass');
var fingerprint = require('metalsmith-fingerprint-ignore');
var dateInFilename = require('metalsmith-date-in-filename');
var moment = require('moment');
var paginate = require('metalsmith-pager');
var inplace = require('metalsmith-in-place');

var production = process.argv[2] == 'production';

// Helpers
// --------------------------------------------

var Handlebars = require('handlebars');
Handlebars.registerHelper('formatDate', function (date, format) {
  var mmnt = moment(date);
  return mmnt.format(format);
});

Handlebars.registerHelper('removeFilename', function (str) {
  return str.substring(0, str.lastIndexOf("/"));
});

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
    blog: {
      pattern: 'blog/*.md',
      sortBy: 'date',
      reverse: true
    },
    work: {
      pattern: 'work/*.md'
    }
  }))
  .use(paginate({
    collection: 'blog',
    elementsPerPage: 5,
    pagePattern: 'blog/page:PAGE/index.html.hbs',
    index: 'blog/index.html.hbs',
    paginationTemplatePath: '../layouts/partials/blogPagination.html',
    layoutName: 'default.html'
  }))
  .use(dateInFilename())
  .use(markdown())
  .use(sass({
    outputStyle: production ? "compressed" : "expanded"
  }))
  .use(permalinks({
    relative: false,
    pattern: ':title',
    linksets: [{
      match: { collection: 'blog' },
      pattern: 'blog/:title'
    },{
      match: { collection: 'work' },
      pattern: 'work/:title'
    }]
  }))
  // Run handlebars on any individual pages,
  // especially the pagination pages named .html.hbs
  .use(inplace({
    engineOptions: {
      partials: './layouts/partials',
      cache: false
    }
  }))
  .use(fingerprint({ pattern: 'css/app.css' }))
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

  // var watch = require('metalsmith-watch');
  //
  // build = build.use(
  //   watch({
  //     paths: {
  //       "src/**/*": true,
  //       "layouts/**/*": true
  //     },
  //     livereload: false
  //   })
  // );

}

build.build(function(err) {
    if (err) throw err;
  });

import fs from "fs";
import path from "path";
import { performance } from "perf_hooks";
import Metalsmith from "metalsmith";
import browserSync from "browser-sync";
import collections from "@metalsmith/collections";
import layouts from "@metalsmith/layouts";
import markdown from "@metalsmith/markdown";
import permalinks from "@metalsmith/permalinks";
import fingerprint from "metalsmith-fingerprint";
import filenameMetadata from "metalsmith-metadata-in-filename";
import moment from "moment";
import pagination from "metalsmith-pagination";
import inplace from "@metalsmith/in-place";
import debug from "metalsmith-debug";
import sitemap from "metalsmith-sitemap";
import Handlebars from "handlebars";

let devServer = null;
let t1 = performance.now();
const isProduction = process.env.NODE_ENV === "production";

// Helpers
// --------------------------------------------

Handlebars.registerHelper("formatDate", function (date, format) {
  var mmnt = moment(date);
  return mmnt.format(format);
});

Handlebars.registerHelper("removeFilename", function (str) {
  return str.substring(0, str.lastIndexOf("/"));
});

Handlebars.registerHelper("debug", function (obj) {
  console.log(obj);
});

// Load files
// --------------------------------------------

const partials = {};

const dirname = "./layouts/partials";
const partialFiles = fs.readdirSync(dirname);
partialFiles.forEach((filename) => {
  const content = fs.readFileSync(path.join(dirname, filename), "utf-8");
  partials[filename.replace(".hbs", "")] = content;
});

const blogPagination = fs.readFileSync("./layouts/partials/blogPagination.hbs");

// Metalsmith
// --------------------------------------------

let compiler = Metalsmith(import.meta.dirname)
  .use(debug())
  .metadata({
    sitename: "Rune Madsen - Designer, Artist, Educator",
    siteurl: "https://runemadsen.com/",
    description:
      "Rune Madsen is a designer, artist and educator who uses programming languages to create things with the computer.",
    keyword:
      "algorithmic, graphic, design, systems, generative, Processing, creative, code, programming, P5.js",
  })
  .source("./src")
  .destination("./build")
  .clean(true)
  .watch(isProduction ? false : ["src", "layouts"])
  .use(
    collections({
      blog: {
        pattern: "blog/*.md",
        sortBy: "date",
        reverse: true,
      },
      work: {
        pattern: "work/*.md",
        sortBy: "date",
        reverse: true,
      },
      talks: {
        pattern: ["talks/*.md", "talks/*.html"],
        sortBy: "date",
        reverse: true,
      },
      syllabi: {
        pattern: ["syllabi/*.md"],
        sortBy: "date",
        reverse: true,
      },
    })
  )
  .use(
    filenameMetadata({
      match: "**/*.{md,html}",
    })
  )
  .use(
    pagination({
      "collections.blog": {
        perPage: 5,
        first: "blog/index.html.hbs",
        path: "blog/page:num/index.html.hbs",
        pageContents: blogPagination,
        layout: "default.hbs",
      },
    })
  )
  .use(markdown())
  .use(
    permalinks({
      relative: false,
      linksets: [
        {
          match: { collection: "blog" },
          pattern: "blog/:slug",
        },
        {
          match: { collection: "work" },
          pattern: "work/:slug",
        },
        {
          match: { collection: "talks" },
          pattern: "talks/:slug",
        },
        {
          match: { collection: "syllabi" },
          pattern: "syllabi/:slug",
        },
      ],
    })
  )
  // Run handlebars on any individual pages,
  // especially the pagination pages named .html.hbs
  .use(
    inplace({
      transform: "jstransformer-handlebars",
      engineOptions: {
        partials,
        cache: false,
      },
    })
  )
  .use(fingerprint({ pattern: "css/index.css" }))
  .use(
    layouts({
      pattern: "**/*.html",
      directory: "layouts",
      default: "default.hbs",
      engineOptions: {
        partials,
      },
    })
  );

if (isProduction) {
  compiler = compiler.use(
    sitemap({
      hostname: "https://runemadsen.com",
      omitIndex: true,
    })
  );
}

compiler.build(function (err) {
  if (err) {
    throw err;
  }

  console.log(
    `Build success in ${((performance.now() - t1) / 1000).toFixed(1)}s`
  );

  if (compiler.watch()) {
    if (devServer) {
      t1 = performance.now();
      devServer.reload();
    } else {
      devServer = browserSync.create();
      devServer.init({
        host: "localhost",
        server: "./build",
        port: 3000,
        injectChanges: false,
        reloadThrottle: 0,
      });
    }
  }
});

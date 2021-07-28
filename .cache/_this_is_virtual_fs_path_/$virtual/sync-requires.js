
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/danielastudillo/Desktop/Projects/personal-site/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/danielastudillo/Desktop/Projects/personal-site/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/danielastudillo/Desktop/Projects/personal-site/src/pages/about.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/danielastudillo/Desktop/Projects/personal-site/src/pages/blog.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/danielastudillo/Desktop/Projects/personal-site/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/Users/danielastudillo/Desktop/Projects/personal-site/src/pages/projects.js")),
  "component---src-pages-resume-js": preferDefault(require("/Users/danielastudillo/Desktop/Projects/personal-site/src/pages/resume.js"))
}


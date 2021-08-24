const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/francanete/dev_learning/fran_blog_mdx/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/francanete/dev_learning/fran_blog_mdx/src/pages/404.js"))),
  "component---src-templates-all-posts-js": hot(preferDefault(require("/Users/francanete/dev_learning/fran_blog_mdx/src/templates/allPosts.js"))),
  "component---src-templates-single-post-js": hot(preferDefault(require("/Users/francanete/dev_learning/fran_blog_mdx/src/templates/singlePost.js")))
}


const blogPathRegex = /^\/blog\/(\d{4})\/(\d{2})-(\d{2})-(.+)$/;

function postDate(path) {
  let matches = blogPathRegex.exec(path);
  return `${matches[1]}-${matches[2]}-${matches[3]}`;
}

function postPermalink(path) {
  let matches = blogPathRegex.exec(path);
  return `/blog/${matches[4]}/`;
}

module.exports = {
  eleventyComputed: {
    date: data => new Date(postDate(data.page.filePathStem)),
    permalink: data => postPermalink(data.page.filePathStem)
  }
};

const blogPathRegex = /^\/blog\/(\d{4})\/(\d{2})-(\d{2})-(.+)$/;

function postDate(path) {
  let matches = blogPathRegex.exec(path);
  return
    matches
    ? `${matches[1]}-${matches[2]}-${matches[3]}`
    : null;
}

function postPermalink(path) {
  let matches = blogPathRegex.exec(path);
  return
    matches
    ? `/blog/${matches[4]}/`
    : null;
}

module.exports = {
  eleventyComputed: {
    date: data => new Date(postDate(data.page.filePathStem) || data.page.date),
    permalink: data => postPermalink(data.page.filePathStem) || data.permalink
  }
};

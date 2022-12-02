const pathRe = /^\/blog\/\d{4}(.+)$/;

module.exports = {
  eleventyComputed: {
    permalink: data =>
      pathRe.test(data.page.filePathStem)
        ? data.page.filePathStem.replace(pathRe, '/blog$1/') // clip year from path
        : data.permalink
  }
};

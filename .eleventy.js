module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({'_internal/css': 'css'});
  eleventyConfig.addPassthroughCopy('files');
  eleventyConfig.addPassthroughCopy('screenshots');

  /* trying to explicitly add favicon.ico as a fallback for old browsers */
  // eleventyConfig.addPassthroughCopy('assets/favicon.ico');

  return {
    dir: {
      includes: "../_internal",
      input: 'notes',
      output: 'www'
    }
  }
}

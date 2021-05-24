module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({'_internal/css': 'css'});
  eleventyConfig.addPassthroughCopy('files');
  eleventyConfig.addPassthroughCopy('screenshots');

  return {
    dir: {
      data: '../_data',
      includes: '../_internal',
      input: 'notes',
      output: 'www'
    }
  }
}

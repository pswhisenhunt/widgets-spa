module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'js/bundle.js' : ['js/**/*', 'js/*.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['browserify']);
}

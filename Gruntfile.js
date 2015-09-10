module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      dist: {
        files: {
          'js/bundle.js' : ['js/**/*', 'js/*.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/*.js', 'js/**/*.js']
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['browserify', 'watch']);
}

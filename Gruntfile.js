// Grunt configuration file
module.exports = function(grunt){
  grunt.initConfig({
    // nodemon configuration
    nodemon: {
      dev: {
        script: __dirname+ '/server/server.coffee',
      }
    },
  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-nodemon');

  // Register the tasks to default
  grunt.registerTask('default', ['nodemon']);
}
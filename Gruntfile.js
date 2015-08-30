// Grunt configuration file
module.exports = function(grunt){
  grunt.initConfig({
    // JS Tasks
    coffee: {
      build: {  // Build
        // expand: true,
        // cwd: 'client',
        // src: ['**/*.coffee'],
        // dest: 'dist',
        // ext: '.js'
        files: {
          'client/js/app.js' : ['client/**/*.coffee', 'client/*.coffee']
        }
      }
    },

    uglify: {
      build: {
        files:{
          'dist/app.min.js' : ['dist/**/*.js', 'dist/*.js']
        }
      }
    },

    // // Convert Less to css
    // less: {
    //   dist: { 
    //     files: {
    //       'client/styles.css' : ['dist/style.less']
    //     }
    //   }
    // },

    // // Minify the CSS
    // cssmin: {
    //   build: { 
    //     files: {
    //       'dist/style.min.css' : ['dist/**/*.css', 'dist/*.css']
    //     }
    //   }
    // },

    // Watch Configuration
    watch: {
      coffee: {
        files: ['client/**/*.coffee', 'client/*.coffee'],
        tasks: ['coffee']
      }
    },

    // nodemon configuration
    nodemon: {
      dev: {
        script: __dirname+ '/server/server.coffee',
      }
    },
  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Register the tasks to default
  grunt.registerTask('default', ['coffee', 'uglify', 'less', 'cssmin', 'nodemon']);
}
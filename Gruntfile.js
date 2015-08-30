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

    // uglify: {
    //   build: {
    //     files:{
    //       'dist/app.min.js' : ['dist/**/*.js', 'dist/*.js']
    //     }
    //   }
    // },

    // // Convert Less to css
    less: {
      build: { 
        files: {
          'client/styles.css' : ['client/styles.less']
        }
      }
    },

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
      },

      less: {
        files: ['client/styles.less'],
        tasks: ['less']
      }
    },

    // nodemon configuration
    nodemon: {
      dev: {
        script: __dirname+ '/server/server.coffee',
      }
    },

    // Setup concurrent 
    concurrent: {
      options: {
        logConcurrentOutput: true,
      },
      tasks: ['nodemon', 'watch']
    },
  });

  // Load Tasks
  var tasks = ['grunt-contrib-coffee', 'grunt-contrib-less', 'grunt-contrib-watch', 'grunt-nodemon', 'grunt-concurrent']

  tasks.forEach(function(task){ grunt.loadNpmTasks(task) });

  // Register the tasks to default
  grunt.registerTask('default', ['coffee', 'less', 'concurrent']);
}
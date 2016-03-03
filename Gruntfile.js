module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'css/style.sass'
        }
      }
    },
    watch: {
      options:{
        livereload: true
      },
      sass: {
        files: 'css/*.sass',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    },
    express:{
      all:{
        options: {
          port: 9000,
          hostname: 'localhost',
          bases:['.'],
          livereload: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ['sass', 'watch']);
  grunt.registerTask('server', ['express', 'watch']);
};
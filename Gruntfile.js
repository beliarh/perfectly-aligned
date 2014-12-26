module.exports = function (grunt) {
    grunt.initConfig({
         pkg: grunt.file.readJSON('package.json'),
         uglify: {
             js: {
                 files: {
                     'perfectly-aligned.min.js': ['perfectly-aligned.js']
                 }
             }
         }
     });

    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['uglify']);
};
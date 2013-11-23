module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: {
        src: ['app/js/*.js']
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd" %> * /\n'
      },
      build: {
        src: '',
        dest: ''
      }
    },
    compass: {
      dev: {
        options: {
          sassDir: 'app/sass',
          cssDir: 'app/css',
          raw: 'preferred_syntax = :sass\n'
        }
      },
      prod: {
        options: {
          sassDir: 'app/sass',
          cssDir: 'app/css',
          raw: 'preferred_syntax = :sass\n',
          enviroment: 'production'
        }
      }
    },
    watch: {
      js: {
        files: 'app/js/*.js',
        task: ['jshint'],
        options: {
          livereload: true
        }
      },
      css: {
        files: 'app/sass/*.sass',
        task: ['compass'],
        options: {
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['jshint','compass:dev','watch']);
  grunt.registerTask('prod', ['uglify','watch']);
};
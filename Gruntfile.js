module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: {
        src: ['app/static/js/*.js']
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
          sassDir: 'app/static/sass',
          cssDir: 'app/static/css',
          raw: 'preferred_syntax = :sass\n'
        }
      },
      prod: {
        options: {
          sassDir: 'app/static/sass',
          cssDir: 'app/static/css',
          raw: 'preferred_syntax = :sass\n',
          enviroment: 'production'
        }
      }
    },
    watch: {
      js: {
        files: 'app/static/js/*.js',
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      compass: {
        files: 'app/static/sass/*.sass',
        tasks: ['compass:dev'],
        options: {
          livereload: true
        }
      }
    },
    express: {
      all: {
        options: {
          port: 3000,
          bases: ['.']
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('dev', ['jshint','compass:dev','watch']);
  grunt.registerTask('prod', ['uglify','watch']);
};
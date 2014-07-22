module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			dist: {
				src: [
                    'dist/js/**/*.js'
				],
				dest: 'dist/js/lib/adapter.js'
			}
		},

        connect: {
        	server: {
        		options: {
        			port: 2013,
        			base: './dist'
        		}
        	}
        },

        open: {
            dev: {
            	path: 'http://localhost:2013/index.html'
            }
        },

        watch: {
        	files: 'dist/js/**/*.js',
        	tasks: ['concat']
        }

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-open');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat', 'connect', 'open', 'watch']);
};

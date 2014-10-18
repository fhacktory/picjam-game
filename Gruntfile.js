module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'client/assets/css/index.css' : 'client/assets/sass/index.scss'
				}
			}
		},
		watch: {
			options: {
		        livereload: true,
		        spawn : false
		    },
			css: {
				files: ['client/assets/sass/*.scss', 'client/assets/sass/**/*.scss'],
				tasks: ['sass']
			},
	      	client:{
	      		files: ['client/app/**/*', 'client/app/*', 'client/**']
	      	}
		},
		develop: {
	      server: {
	        file: 'server/index.js'
	      }
    	}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-develop');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['develop', 'watch']);
};
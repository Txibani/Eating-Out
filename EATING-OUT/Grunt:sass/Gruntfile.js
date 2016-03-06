module.exports = function(grunt) {
	grunt.initConfig({


//	  sass: {                              // Task
//	    dist: {                            // Target
//	      options: {                       // Target options
//	        style: 'expanded'
//	      },
//	      files: {
//              //Destination                             //source file
//	        '../EatingOutsideApp/www/css/index.css' : '../sass/index.scss'
////           	'../EatingOutsideApp/www/css/second.css': '../sass/second.scss',
////             '../EatingOutsideApp/www/css/menu.css': '../sass/menu.scss'
//	      }
//	    }
//	  },
//

        //Task configuration compile and minify css
        compass: {                  // Task
            dist: {                   // Target
                options: {              // Target options
                    sassDir: '../sass',
                    cssDir: '../EatingOutsideApp/www/css',
                    environment: 'production'
                }
            },
            dev: {                    // Another target
                options: {
                    sassDir: '../sass',
                    cssDir: '../EatingOutsideApp/www/css'
                }
            }
        },

        watch: {
	      compass: {
	        files: ['../sass/*.scss'],
	        tasks: ['compass']
	      }
      }

	});

    // These plugins provide necessary tasks.
        grunt.loadNpmTasks('grunt-contrib-compass');
        grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
//        grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['compass', 'watch']);
};

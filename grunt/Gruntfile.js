module.exports = function(grunt) {

  // Grunt config - declared in Load-Grunt-Config
  grunt.initConfig({

  });
  
  //console.log(grunt.source.dir);
  
  require('time-grunt')(grunt);
  // require('jit-grunt')(grunt)({
    // pluginsRoot: 'grunt/config'
  // });
  
  require('load-grunt-config')(grunt, {
    jitGrunt: true,

    data: {
      // Data passed into config.  Can use with <%= test %>

      // Paths for Plugins settings:
      gruntPluginsDir : grunt.source.dir+'/grunt/config',

      // Paths for Watch:
      // Grunt
      gruntSettings: [
        /* Grunt config   */ 'Gruntfile.js',
        /* Grunt modules  */ 'package.json',
        /* Build settings */ 'grunt/aliases.yaml',
        /* Grunt tasks    */ 'grunt/*.js',
      ],
      gruntPluginsSettings: [
        '<%= csslint.options.csslintrc %>',
        '<%= jshint.options.jshintrc %>',
        '<%= jscs.options.config %>',
      ],

      // Compile:
        // Source:
          // CSS
          sourceCSSDir    : 'dev/sass',
          sourceCSSFiles  : '<%= sourceCSSDir %>' + '/**/*.scss',
          sourceCSSBase64 : '<%= sourceCSSDir %>' + '/_base64.scss',

          // JS
          sourceJSPlugins : [
            'dev/js/plugins/*.js',
            'dev/js/plugins/helpers/*.js',
          ],
          sourceJSMy      : [
            'dev/js/blocks/**/*.js',
            'dev/js/main.js',
          ],
          sourceJSFiles   : [
            '<%= sourceJSPlugins %>',
            '<%= sourceJSMy %>',
          ],

          // IMG
          sourceIMGDir      : 'dev/img',
          sourceIMGFiles    : '<%= sourceIMGDir %>' + '/**/*.{png,jpg,gif,svg}',
          sourceBase64Files : '<%= sourceIMGDir %>' + '/base64/*.{png,jpg,gif,svg}',

        // Destination:
          // CSS
          destCSSDir    : 'src/css', // generated css-files names taked from scss files in %sourceCSSDir
          destCSSExt    : '.css',
          destMinCSSExt : '.min.css',
          destCSS       : '<%= destCSSDir %>' + '/main' + '<%= destCSSExt %>',
          destMinCSS    : '<%= destCSSDir %>' + '/main' + '<%= destMinCSSExt %>',

          // JS
          destJSDir  : 'src/js',
          destJS     : '<%= destJSDir %>'  + '/scripts.js',

          // IMG
          destIMGDir : 'src/img',
    },
  });
  grunt.source.loadAllTasks();
};

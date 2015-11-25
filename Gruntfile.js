'use strict';

// wrapper function(実際の設定は全てこの中に書く)
module.exports = function(grunt) {
  require('load-grunt-config')(grunt);
  // package.jsonでインストールしたプラグインをロード
  grunt.loadNpmTasks('grunt-karma');
  // デフォルトタスク(grunt起動時に自動実行)
  grunt.registerTask('default', ['karma']);
};
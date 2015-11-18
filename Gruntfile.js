'use strict';

// wrapper function(実際の設定は全てこの中に書く)
module.exports = function(grunt) {
  // 設定情報を初期化
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    }
  });
  // package.jsonでインストールしたプラグインをロード
  grunt.loadNpmTasks('grunt-karma');
  // デフォルトタスク(grunt起動時に自動実行)
  grunt.registerTask('default', ['karma']);
};
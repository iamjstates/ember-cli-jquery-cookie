'use strict';

var path = require('path');
var fs = require('fs');


function EmberCLICookie(project) {
    this.project = project;
    this.name = 'Ember CLI jQuery Cookie';
}

function unwatchedTree(dir) {
    return {
        read:    function() { return dir; },
        cleanup: function() { }
    };
}

EmberCLICookie.prototype.treeFor = function treeFor(name) {
  if (name !== 'vendor') { return; }

  var treePath =  path.join('node_modules', 'ember-cli-jquery-cookie', 'node_modules');

  return unwatchedTree(treePath);
};

EmberCLICookie.prototype.included = function included(app) {
  this.app = app;

  this.app.import('bower_components/jquery.cookie/jquery.cookie.js');
};

module.exports = EmberCLICookie;

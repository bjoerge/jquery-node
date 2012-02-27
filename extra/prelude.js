(function(global) {
  var __createWindow = function() {
    var jsdom = require("jsdom").jsdom,
    document = jsdom(),
    window   = document.createWindow();

    window.document = document;
    window.location = require('location');
    window.navigator = require('navigator');
    if (!window.XMLHttpRequest && 'function' !== typeof window.ActiveXObject) {
      window.XMLHttpRequest = require('xmlhttprequest');
    }
    return window;
  };

  var window = global.document ? global : __createWindow();

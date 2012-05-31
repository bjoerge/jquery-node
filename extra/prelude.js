(function(global, window) {
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

  if (typeof window === 'undefined') window = __createWindow();

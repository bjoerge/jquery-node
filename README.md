# jQuery for Node.js

A super thin, super simple wrapper for jquery that works in Node.js

# How to use

Include it as a dependency in your project's package.json:

```json
// (...)
"dependencies": { // or in devDependencies
  "jquery": "git://github.com/bjoerge/jquery-node.git#v1.9.0"
}
// (..)
```

Install it

    $ npm install
  
Use it

    $ node
    > $ = require("jquery");
    > $('<div>Hello world</div>').html();
    'Hello world'
# jQuery for node.js

A super thin, super simple wrapper for jquery that works in node.js

# How to use

Include it as a dependency in your project's package.json:

```json
// (...)
"dependencies": { // or in devDependencies
  "jquery": "git://github.com/bjoerge/jquery-node.git#1.7.1"
}
// (..)
```

Install it

    $ npm install
  
Use it

    $ node
    > $('<div>Hello world</div>').html()
    'Hello world'

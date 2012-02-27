# jQuery for node.js

A super thin, super simple wrapper for jquery that works in node.js

# How to use

Include it as a dependency in your project's package.json:

```json
// (...)
"dependencies": { // or in devDependencies
  "expect.js": "git://github.com/bjoerge/jquery-node.git#master"
}
// (..)
```

Install it

  $ npm install
  
Use it

  $ node
  > $ = require("jquery")
  > console.log($('<div></div>').html())
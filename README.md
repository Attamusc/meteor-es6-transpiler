# meteor-es6-transpiler
> Get tomorrow's module syntax in tomorrow's framework, today.

## Install

`meteor-es6-transpiler` is installed similar to other [Atmosphere](https://atmosphere.meteor.com) packages.

```
$ npm install -g meteorite
$ mrt add es6-transpiler
```

Then, just create  javascript files in your project with the `.njs` extension.


## Usage

Any file with `.njs` will be compiled using [es6-module-transpiler](https://github.com/square/es6-module-transpiler) into AMD format. Once in that form, [almond](https://github.com/jrburke/almond) is used on the client for resolving modules. Usage (and the current sanctioned  module syntax) can be found in es6-module-transpiler's README.

The `.njs` extension is necessary to not conflict with the Meteor's defaut `js` extension handler, which is necessary for packages to run.

## Considerations

This module is currently heavily biased toward usage on the client and the file structure we use, which follows the structure outlined in [Discover Meteor](http://www.discovermeteor.com):

```
- client
  - managers
    - <feature>
      - *.njs
  - lib
    - <component>
      - *.njs
  - helpers
    - *.njs
  - views
    - <feature>
      - *.html
  - main.html
  - main.js
- lib
  - *.js
- public
- server
  - *.js
- collections
  - *.js
```

`main.js` is a standard requirejs `require` module that pulls in all the dependencies for the main page of the app, which in turn bootstrap the rest of the app. Since Meteor currently follows a very loose set of rules of what order files are loaded in, availability of modules given any other structure can be unpredictable

## License

The MIT License (MIT)

Copyright (c) 2013 Sean Dunn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

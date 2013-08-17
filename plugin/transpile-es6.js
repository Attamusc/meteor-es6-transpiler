var handler,
    Compiler = Npm.require('es6-module-transpiler').Compiler,
    fs = Npm.require('fs'),
    path = Npm.require('path'),
    sourcemap = Npm.require('source-map');

var handler = function(compileStep) {
  var contents = compileStep.read().toString('utf8'),
      name = compileStep.inputPath.slice(0, compileStep.inputPath.indexOf('.njs')),
      compiler = new Compiler(contents, name);

  compileStep.addJavaScript({
    path: compileStep.inputPath.replace('.njs', '.js'),
    data: compiler.toAMD(),
    sourcePath: compileStep.inputPath
  });
};

Plugin.registerSourceHandler('njs', handler);

Package.describe({
  summary: "Use tomorrow's Javascript in tomorrow's framework, today."
});

Package._transitional_registerBuildPlugin({
  name: "transpileES6",
  use: [],
  sources: [
    "plugin/transpile-es6.js"
  ],
  npmDependencies: {
    "es6-module-transpiler": "0.2.0",
    "source-map": "0.1.24"
  }
});

Package.on_use(function(api) {
  api.add_files(["lib/almond.js"], ["client"]);
  api.export(["requirejs", "require", "define"], ["client"]);
});

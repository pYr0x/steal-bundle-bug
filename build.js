var stealTools = require("steal-tools");

var promise = stealTools.build({
	main: "main",
	config: __dirname+"/package.json!npm"
},{
	minify: false,
	debug: true,
	bundleAssets: true
});
"use strict";

var OS = require("os")
  , path = require('path').dirname(require.main.filename)
  , exec = require('child_process').exec
  , puts = function(error, stdout, stderr) { if (error) console.log("Error: " + error);};

// Regenerate config if not a windows platform
// if windows, use the default config.h
if (OS.platform() !== "win32") {
  exec("make clean", {cwd: path + "/scrypt/scrypt-1.2.1"});

  // support cross-building
  // var host = process.env.npm_config_target_arch; // npm_config_arch;
  // var configure = "./configure" + (host ? " --host=" + host : "");

  console.dir(process.env);

  var configure = './configure';

  exec(configure, {cwd: path + "/scrypt/scrypt-1.2.1"}, puts)
    .on('exit', function(code, signal) {
      process.exit(code);
    });
}

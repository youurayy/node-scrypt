const OS = require("os")
const path = require('path').dirname(require.main.filename)
const exec = require('child_process').exec
const puts = (error, stdout, stderr) => {
  if (stdout) console.log("Stdout: " + stdout)
  if (stderr) console.log("Stderr: " + stderr)
  if (error) console.log("Error: " + error)
}

const exit = (code) => {
  // give some time to puts
  setTimeout(function() { process.exit(code); }, 2000)
}

// Generate config if not on a Windows platform
if (OS.platform() !== "win32") {

  // support cross-building
  const host = process.env.npm_config_target_arch // npm_config_arch;
  const configure = "./configure" + (host ? " --host=" + host : "")

  console.dir(process.env); // temporary

  console.log(`running configure: ${configure}`)

  exec(configure, { cwd: `${path}/scrypt/scrypt-1.2.1` }, puts).on('exit', (code, signal) => {
    exit(code)
  })

} // !== win32

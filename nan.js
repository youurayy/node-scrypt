// "install": "node-gyp rebuild --verbose",
// '<!(node -e "require(\'nan\')")',

const paths = [
  './node_modules/nan',
  '../nan',
  '../../nan',
  '../../../nan',
  '../../../../nan'
]

for(let i = 0; i < paths.length; i++) {
  try {
    require(paths[i] + '/include_dirs.js')
    return
  }
  catch(e) {
  }
}

throw new Error('cannot find nan; searched: ' + JSON.stringify(paths))

const fs = require('fs');
let pkg = require('../package.json');
let pkglock = require('../package-lock.json');
let manifest = require('../manifest.json');

let version = pkg.version.split('.');

if (process.argv[2] && process.argv[2].indexOf('.') != -1) {
    version = process.argv[2];
} else {
    switch (process.argv[2]) {
        case 'major':
            version[0]++;
            break;
        case 'minor':
            version[1]++;
            break;
        default:
        case 'mini':
            version[2]++;
            break;
    }

    version = version.join('.');
}

pkg.version = version;
pkglock.version = version;
manifest.version = version;

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2) + '\n');
fs.writeFileSync('package-lock.json', JSON.stringify(pkglock, null, 2) + '\n');
fs.writeFileSync('manifest.json', JSON.stringify(manifest, null, 2) + '\n');

console.log('Bumped version to', version);

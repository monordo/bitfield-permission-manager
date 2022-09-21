'use strict';
const fs = require('fs');
const { exec } = require('child_process');
const config = require('./package.json');

// V0.0.2

// GET ARGS
if (process.argv.length !== 3) {
  console.log('For use updateBuildVersion you need to specify app version');
  console.log('ex: ./updateBuildVersion.sh 0.0.10');
  process.exit(84);
}
const argvVersion = process.argv[2];

// CREATE BACKUP
if (!fs.existsSync('./backups')) {
  fs.mkdirSync('./backups');
  console.log('# Create ./backups folder');
}
const backupPath = `./backups/app.${new Date().getTime()}.json`;
console.log('# Create app.json backup ->', backupPath);
fs.writeFileSync(backupPath, JSON.stringify(config));

// VERSION
const version = argvVersion;

console.log('# New version name ->', version);

// UPDATE CONFIG
config.version = version;

// WRITE CONFIG
fs.writeFileSync('package.json', JSON.stringify(config, null, 2));
console.log('# package.json updated');
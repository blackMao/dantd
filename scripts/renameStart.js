const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

try {
  const currPath = path.resolve(__dirname, '../src');
  const newPath = path.resolve(__dirname, '../entry');
  fs.renameSync(currPath, newPath);
  fs.mkdirSync(currPath);
  const copyPath = path.resolve(__dirname, '../entry/components');
  fse.copySync(copyPath, currPath);
  console.log('Successfully renamed the directory.');
} catch (err) {
  console.log(err);
}

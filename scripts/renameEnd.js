const fs = require('fs');
const path = require('path');
const fse = require('fs-extra');

try {
  const srcPath = path.resolve(__dirname, '../src');
  const entryPath = path.resolve(__dirname, '../entry');
  fse.removeSync(srcPath);
  fs.renameSync(entryPath, srcPath);
  console.log('Successfully renamed the directory.');

  // 将所需要的 theme 文件复制到输出中
  const themePath = path.resolve(__dirname, '../src/assets/customer/antd-variables.less');
  const newThemePath = path.resolve(__dirname, '../dist/antd-variables.less');
  fs.copyFileSync(themePath, newThemePath);

  console.info('拷贝`antd-variables.less`文件成功！');
} catch (err) {
  console.log(err);
}

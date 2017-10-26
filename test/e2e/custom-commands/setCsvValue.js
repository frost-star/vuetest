const fs = require('fs');
const csvPerser = require('csv-parse/lib/sync');

exports.command = function(filePath, caseName, callback) {
  // 列名の設定
  const selectorColumn = 'selector';
  const valueColumn = 'value';
  const enableMark = '〇';

  // csv読み込み
  let csv;
  try {
    let stream = fs.readFileSync(filePath);
    csv = csvPerser(stream, {columns: true});
  } catch (err) {
    console.log(err);
    throw 'Unable to open file: ' + filePath;
  }

  // テストデータの整形
  let testData = {};
  csv.forEach((row, index, csv) => {
    if (row[selectorColumn] !== '') {
      this.selector = row[selectorColumn];
    }
    if (row[caseName] === enableMark) {
      testData[this.selector] = row[valueColumn];
    }
  }, {selector: ''});

  // 値の設定
  Object.keys(testData).forEach((key) => {
    this.setValue(key, testData[key]);
  });
}

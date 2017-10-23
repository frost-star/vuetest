const fs = require('fs');
const csvPerser = require('csv-parse/lib/sync');

exports.command = function(filePath, caseName, callback) {
  const selectorColumn = 'selector';
  const valueColumn = 'value';
  const enableMark = '〇';

  let csv;

  try {
    let stream = fs.readFileSync(filePath);
    csv = csvPerser(stream, {columns: true});
  } catch (err) {
    console.log(err);
    throw 'Unable to open file: ' + filePath;
  }

  // csv = csv.map((row, index, csv) => {
  //   let result = Object.assign({}, row);
  //   if (row[selectorColumn] === '') {
  //     result[selectorColumn] = this.selector;
  //   } else {
  //     this.selector = row[selectorColumn];
  //   }
  //   return result;
  // }, {selector: ''});

  let testData = {};
  csv.forEach((row, index, csv) => {
    if (row[selectorColumn] !== '') {
      this.selector = row[selectorColumn];
    }
    if (row[caseName] === enableMark) {
      testData[this.selector] = row[valueColumn];
    }
  }, {selector: ''});
  Object.keys(testData).forEach((key) => {
    this.setValue(key, testData[key]);
  });
}
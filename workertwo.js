const imagemagick = require('imagemagick');
const path = require("path");
const { workerData, parentPort } = require('worker_threads');

let destSource = path.join(__dirname, workerData);
let destDest = path.join(__dirname, 'two.jpg');

let optionObj = [destSource, '-resize', '100x100', destDest]
console.log("workerData",optionObj);
imagemagick.convert(optionObj, (err, stdout) => {
    if (err) throw err;
    parentPort.postMessage({ fileName: destDest, status: 'Done' })
})




const fs = require('fs');
const path = require('path');

// Create folder
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
    if (err) throw err;
    console.log('Folder created !!!');
});

// Create and write to file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), "Hello World", (err) => {
    if (err) throw err;
    console.log('File created and written!!!');
    // Append to file
    fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), ". I love Node js", (err) => {
        if (err) throw err;
        console.log('Content append to file!!!');
    });

});

// Read file
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf-8', (err, data) => {
    if (err) throw err;
    console.log('Read file => ', data);
});

// Rename File
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'test.txt'), (err) => {
    if (err) throw err;
    console.log('Renamed file !!!');
});

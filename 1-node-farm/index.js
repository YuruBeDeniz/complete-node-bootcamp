const fs = require('fs'); 

//fs -> file system
//to read and write files with NodeJS


//sync
const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8')
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}. .\Created on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt', textOut); 

//async
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) => {
    console.log(data);
});
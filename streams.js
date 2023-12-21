const fs = require('fs');

// Create a readable stream from input.txt
const readStream = fs.createReadStream('file1.txt', 'utf8');

// Create a writable stream to output.txt
const writeStream = fs.createWriteStream('file1.txt');

// Pipe the read stream to the write stream
readStream.pipe(writeStream);

// Event handlers for logging progress
readStream.on('data', (chunk) => {
    console.log('Read chunk:', chunk);
});

writeStream.on('finish', () => {
    console.log('Write completed.');
});

writeStream.on('error', (err) => {
    console.error('Write error:', err);
});

// Handle errors on the read stream
readStream.on('error', (err) => {
    console.error('Read error:', err);
});

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const allImages = require('./allImages.json');

const getFileName = (url) => url.substring(url.lastIndexOf('-') + 1);

const downloadImage = async (url) => {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFile(`./download/${getFileName(url)}`, buffer, () => console.log(`Downloaded: ${url}`));
};

fs.mkdirSync(path.join(__dirname, 'download'), { recursive: true });

allImages.forEach(imgUrl => {
  downloadImage(imgUrl);
});

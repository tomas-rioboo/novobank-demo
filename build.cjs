const fs = require('node:fs');
const path = require('node:path');
const output = path.join(__dirname, 'dist');
fs.mkdirSync(output, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js']) fs.copyFileSync(path.join(__dirname, file), path.join(output, file));
fs.mkdirSync(path.join(output, 'assets'), { recursive: true });
for (const file of ['orb.svg','checking-orb.svg','icon-plate.svg','dot.svg','fonts.css','instrument-serif.ttf','inter-regular.ttf','inter-semibold.ttf']) fs.copyFileSync(path.join(__dirname,'assets',file), path.join(output,'assets',file));
console.log('Novobank static site built in dist/');

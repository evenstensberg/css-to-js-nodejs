import fs from 'fs';
import main from './index.mjs';

const input = fs.readFileSync('./test.css', 'utf8');

const output = main(input);
console.log(output)
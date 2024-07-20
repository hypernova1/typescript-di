import * as fs from 'fs';

export function loadClass(directory: string) {
    console.log(directory);
    let strings = fs.readdirSync(directory);
    console.log(strings);
}

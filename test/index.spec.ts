import path from 'path';
import { loadClass } from '../src/class-loader';

describe('test', () => {
    it('test', () => {
        const directoryPath = path.join(__dirname, '');
        loadClass(directoryPath);
    });
});

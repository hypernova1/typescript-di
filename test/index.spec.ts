import path from 'path';
import ClassLoader from '../src/class-loader';

describe('test', () => {
    it('test', () => {
        const directoryPath = path.join(__dirname, '');
        new ClassLoader().load(directoryPath);
    });
});

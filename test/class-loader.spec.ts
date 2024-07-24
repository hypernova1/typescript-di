import path from 'path';
import ClassLoader from '../src/class-loader';
import ClassScanner from "../src/class-scanner";

describe('ClassLoader Test', () => {
    it('test', () => {
        const directoryPath = path.join(__dirname, 'domain');
        new ClassLoader(new ClassScanner()).load(directoryPath);
    });
});

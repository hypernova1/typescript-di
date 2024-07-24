import ClassScanner from '../src/class-scanner';
import path from 'path';

describe('ClassScanner Test', () => {
    const classScanner = new ClassScanner();

    it('find injectable class', () => {
        const directoryPath = path.join(__dirname, 'domain');
        const injectableClasses = classScanner.scan(directoryPath);
        expect(injectableClasses.length).toEqual(3);
    });
});
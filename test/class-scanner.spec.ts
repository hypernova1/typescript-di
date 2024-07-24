import ClassScanner from '../src/class-scanner';
import path from 'path';
import isParentClass from '../src/util/is-parent-class';
import SuperClass from './domain/super-class';
import SubClass from './domain/sub-class';
import InjectableClass from './domain/injectable-class';

describe('ClassScanner Test', () => {
    const classScanner = new ClassScanner();

    it('find injectable class', () => {
        const directoryPath = path.join(__dirname, 'domain');
        const injectableClasses = classScanner.scan(directoryPath);
        expect(injectableClasses.length).toEqual(4);
    });

    it('test isParentClass', () => {
        expect(isParentClass(SuperClass, SubClass)).toBeTruthy();
        expect(isParentClass(SuperClass, InjectableClass)).toBeFalsy();
    });
});
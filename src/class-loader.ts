import 'reflect-metadata';
import ClassScanner from "./class-scanner";

export default class ClassLoader {

    constructor(private readonly classScanner: ClassScanner) {
    }

    load(directory: string) {
        const injectableClasses = this.classScanner.scan(directory)

        for (const injectableClass of injectableClasses) {
            console.log('class name:', injectableClass.prototype.constructor.name);
            const constructorParams = Reflect.getMetadata('design:paramtypes', injectableClass);
            if (typeof constructorParams === 'undefined') {
                continue;
            }
            for (const constructorParam of constructorParams) {
                const instance = this.createInstance(constructorParam);
                console.log(Object.getOwnPropertyNames(instance));
            }
        }
    }

    /**
     * 클래스를 인스턴스로 생성한다.
     * */
    private createInstance<T>(Clazz: new (...args: any[]) => T, ...args: any[]): T {
        return new Clazz(...args);
    }
}

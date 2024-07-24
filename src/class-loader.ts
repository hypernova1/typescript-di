import 'reflect-metadata';
import ClassScanner from './class-scanner';

export default class ClassLoader {

    private instanceMap: Map<Function | string, any> = new Map();

    constructor(private readonly classScanner: ClassScanner) {
    }

    load(directory: string) {
        const injectableClasses = this.classScanner.scan(directory);
        for (const injectableClass of injectableClasses) {
            console.log('class name:', injectableClass.prototype.constructor.name);
            const constructorParams: Function[] | undefined = Reflect.getMetadata('design:paramtypes', injectableClass);
            if (typeof constructorParams === 'undefined') {
                continue;
            }

            this.getParameters(injectableClass, constructorParams);
        }
    }

    private getParameters(injectableClass: Function, constructorParams: Function[]) {
        const qualifyMetadata = Reflect.getOwnMetadata('qualify-inject', injectableClass) || [];
        for (const [index, constructorParam] of constructorParams.entries()) {
            console.log('param class name: ', constructorParam.name);
            const metadata = qualifyMetadata[index];
            if (metadata) {
                console.log('qualifyInject:', metadata);
            }
            // const instance = this.createInstance(constructorParam);
        }
    }

    /**
     * 클래스를 인스턴스로 생성한다.
     * */
    private createInstance<T>(Clazz: new (...args: any[]) => T, ...args: any[]): T {
        return new Clazz(...args);
    }
}

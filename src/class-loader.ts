import * as fs from 'fs';
import path from 'path';
import 'reflect-metadata';

export default class ClassLoader {
    load(directory: string) {
        const fileNames = fs.readdirSync(directory);

        const injectableClasses = this.getInjectableClasses(fileNames, directory);
        for (const injectableClass of injectableClasses) {
            console.log('class name:', injectableClass.prototype.constructor.name);
            const constructorParams = Reflect.getMetadata('design:paramtypes', injectableClass);
            console.log(constructorParams);
        }
    }

    /**
     * 클래스를 인스턴스로 생성한다.
     * */
    private createInstance<T>(Clazz: new (...args: any[]) => T, ...args: any[]): T {
        return new Clazz(...args);
    }

    /**
     * 파일 경로로 부터 클래스 파일을 탐색한 후 반환한다.
     *
     * @param fileNames 파일 이름 목록
     * @param directory 디렉토리
     * @return 찾은 클래스 목록
     * */
    private getInjectableClasses(fileNames: string[], directory: string) {
        const injectableClasses: Function[] = [];
        for (const fileName of fileNames) {
            const filePath = path.join(directory, fileName);
            const module = require(filePath);
            for (const key in module) {
                const moduleElement = module[key];
                const isInjectable = Reflect.getMetadata('injectable', moduleElement);
                if (isInjectable) {
                    injectableClasses.push(moduleElement);
                }
            }
        }
        return injectableClasses;
    }
}

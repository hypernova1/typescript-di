import * as fs from 'fs';
import path from 'path';

export default class ClassScanner {

    private readonly injectableClasses: Function[] = [];

    /**
     * Injectable 데코레이터가 선언된 클래스 목록을 스캔한다.
     *
     * @param directory 스캔할 디렉토리
     * @return Injectable 클래스 목록
     * */
    scan(directory: string) {
        const fileNames = fs.readdirSync(directory);
        this.scanInjectableClasses(fileNames, directory);
        return this.injectableClasses;
    }

    /**
     * 파일 경로로 부터 클래스 파일을 탐색한 후 반환한다.
     *
     * @param fileNames 파일 이름 목록
     * @param directory 디렉토리
     * @return 찾은 클래스 목록
     * */
    private scanInjectableClasses(fileNames: string[], directory: string) {
        for (const fileName of fileNames) {
            const filePath = path.join(directory, fileName);
            const stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                const innerDirectory = directory + '/' + fileName;
                fs.readdirSync(innerDirectory);
                const innerFileNames = fs.readdirSync(innerDirectory);
                this.scanInjectableClasses(innerFileNames, innerDirectory);
                return;
            }
            const module = require(filePath);
            for (const key in module) {
                const moduleElement = module[key];
                const isInjectable = Reflect.getMetadata('injectable', moduleElement);
                if (isInjectable) {
                    this.injectableClasses.push(moduleElement);
                }
            }
        }
    }
}
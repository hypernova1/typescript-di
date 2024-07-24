import 'reflect-metadata';

export default function Injectable(token?: string) {

    return function(target: Function) {
        Reflect.defineMetadata('injectable', true, target);
    };
}

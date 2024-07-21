import 'reflect-metadata';

export default function Injectable(target: Function) {
    Reflect.defineMetadata('injectable', true, target);
}

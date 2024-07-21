import 'reflect-metadata';

export default function CircularInject() {
    return function (target: any, propertyKey?: string, parameterIndex?: number) {
        Reflect.defineMetadata('circular-inject', true, target, propertyKey!);
    };
}

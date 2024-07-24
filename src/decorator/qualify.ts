export default function Qualify(token: string | Symbol) {
    return function(target: any, propertyKey: string | symbol | undefined, parameterIndex: number) {
        const existingMetadata = Reflect.getOwnMetadata('qualify-inject', target) || [];
        existingMetadata[parameterIndex] = token;
        Reflect.defineMetadata('qualify-inject', existingMetadata, target);
    };
}
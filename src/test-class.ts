import InjectableClass from './injectable-class';

export default class TestClass {
    constructor(private readonly injectableClass: InjectableClass) {}

    hello() {
        console.log(this.injectableClass.foo);
    }
}

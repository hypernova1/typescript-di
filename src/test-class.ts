import InjectableClass from './injectable-class';
import Injectable from './injectable';
import InjectableClass2 from './injectable-class2';

@Injectable
export default class TestClass {
    constructor(
        private readonly injectableClass: InjectableClass,
        private readonly injectableClass2: InjectableClass2,
    ) {}

    hello() {
        console.log(this.injectableClass.foo);
    }
}

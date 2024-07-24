import Injectable from '../../../src/decorator/injectable';
import CircularInject from '../../../src/decorator/circular-inject';
import InjectableClass from './injectable-class';
import InjectableClass2 from './injectable-class2';

@Injectable()
export default class TestClass {
    constructor(
        private readonly injectableClass: InjectableClass,
        @CircularInject()
        private readonly injectableClass2: InjectableClass2,
    ) {
    }

    hello() {
        console.log(this.injectableClass.foo);
    }
}

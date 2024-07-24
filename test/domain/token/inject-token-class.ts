import Injectable from '../../../src/decorator/injectable';
import TokenInterface from './token-interface';
import Qualify from '../../../src/decorator/qualify';

@Injectable()
export default class InjectTokenClass {
    constructor(
        @Qualify('TOKEN_CLASS')
        private readonly tokenInterface: TokenInterface) {

    }
}
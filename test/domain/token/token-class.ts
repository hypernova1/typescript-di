import Injectable from '../../../src/decorator/injectable';
import TokenInterface from './token-interface';

@Injectable('TOKEN_CLASS')
export default class TokenClass implements TokenInterface {

}
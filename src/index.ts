import { loadClass } from './class-loader';
import path from 'path';

const directoryPath = path.join(__dirname, '');
loadClass(directoryPath);

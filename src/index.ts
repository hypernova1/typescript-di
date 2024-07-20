import ClassLoader from './class-loader';
import path from 'path';

const directoryPath = path.join(__dirname, '');
new ClassLoader().load(directoryPath);

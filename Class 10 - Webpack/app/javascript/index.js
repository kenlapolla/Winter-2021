import sayHello from './another';
require('./class');
// require("style-loader!css-loader!../css/app.css");
require('../css/app.css');
import moment from 'moment';
console.log(moment().add(7,'days').format());
sayHello();
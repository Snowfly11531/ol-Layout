import './css/totel.css';
import 'ol/ol.css';
import './css/dialog.css';
import Test1 from './ts/test.ts';
import Layout from './ts/layout.ts';

const test1 = new Test1(); // eslint-disable-line no-unused-vars
const layout = new Layout({ target: 'layout', refMap: test1.map }); // eslint-disable-line no-unused-vars

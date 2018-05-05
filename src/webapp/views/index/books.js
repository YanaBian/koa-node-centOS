import axios from 'axios';
import $ from 'jquery';

import CreatBtn from '../../widgets/createBtn/creatBtn.js';
import Table from '../../widgets/table/table.js';

const indexcss = require('./pages/books.css');

const creatBtn = new CreatBtn();
const table = new Table();

// creatBtn.init();
table.init();
require('nodelist-foreach-polyfill');
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', function() {
    "use strict";
    let timer = require('./timer'),
        modal = require('./modal'),
        validator = require('./validatator'),
        form = require('./form'),
        slider = require('./slider');


    slider();
    timer();
    modal();
    validator();
    form();

    new WOW().init();
});
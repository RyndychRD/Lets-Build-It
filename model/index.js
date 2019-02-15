"use strict";

var fs = require("fs");

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js");
    })
    .forEach(file => {
        require('./' + file);
    });

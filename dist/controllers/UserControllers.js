"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Users = require('../users.json');
exports.default = {
    index(request, response) {
        console.log(Users);
    },
};

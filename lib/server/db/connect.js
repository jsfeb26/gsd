'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _environment = require('../environment');

var _environment2 = _interopRequireDefault(_environment);

// import config from './config.json';

// mongoose.connect(config[env].url);
_mongoose2['default'].connect("mongodb://localhost/gsd-dev");
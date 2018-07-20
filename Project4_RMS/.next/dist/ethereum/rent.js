'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Rent = require('./build/Rent.json');

var _Rent2 = _interopRequireDefault(_Rent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Rent2.default.interface), '0x5e013Cb71c615e8d8250E32FB31C1ba03D7ADf22');
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxyZW50LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJSZW50IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBUSxBQUFSLEFBQWtCLEFBQWxCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ08sS0FBSyxBQUFMLE1BQVcsZUFBSyxBQUFoQixBQURQLFlBRU8sQUFGUCxBQUFqQixBQUdBO2tCQUFlLEFBQWYiLCJmaWxlIjoicmVudC5qcyIsInNvdXJjZVJvb3QiOiJFOi9NYW5pIEZvbGRlci9CbG9ja2NoYWluL0V0aGVyZXVtX1VkZW15X1Byb2plY3RzL1Byb2plY3Q0X1JNUyJ9
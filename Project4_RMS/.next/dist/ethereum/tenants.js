'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Tenants = require('./build/Tenants.json');

var _Tenants2 = _interopRequireDefault(_Tenants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var instance = new _web2.default.eth.Contract(JSON.parse(_Tenants2.default.interface), '0xA4B95859AAdA4BdAb846Abb171F4e2635934f522');

exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx0ZW5hbnRzLmpzIl0sIm5hbWVzIjpbIndlYjMiLCJUZW5hbnRzIiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSIsImludGVyZmFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQLEFBQWlCLEFBQWpCOzs7O0FBQ0EsQUFBUSxBQUFSLEFBQXFCLEFBQXJCOzs7Ozs7QUFFQSxJQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQ08sS0FBSyxBQUFMLE1BQVcsa0JBQVEsQUFBbkIsQUFEUCxZQUVPLEFBRlAsQUFBakIsQUFJQTs7a0JBQWUsQUFBZiIsImZpbGUiOiJ0ZW5hbnRzLmpzIiwic291cmNlUm9vdCI6IkU6L01hbmkgRm9sZGVyL0Jsb2NrY2hhaW4vRXRoZXJldW1fVWRlbXlfUHJvamVjdHMvUHJvamVjdDRfUk1TIn0=
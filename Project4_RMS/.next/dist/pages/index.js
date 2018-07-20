'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _tenants = require('../ethereum/tenants');

var _tenants2 = _interopRequireDefault(_tenants);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Mani Folder\\Blockchain\\Ethereum_Udemy_Projects\\Project4_RMS\\pages\\index.js?entry';


var RentIndex = function (_Component) {
    (0, _inherits3.default)(RentIndex, _Component);

    function RentIndex() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RentIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RentIndex.__proto__ || (0, _getPrototypeOf2.default)(RentIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: false
        }, _this.deleteTenant = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event, tenantId) {
                var accounts, tenantDetails, flatNum, result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                _this.setState({ loading: true });
                                _context.next = 4;
                                return _web2.default.eth.getAccounts();

                            case 4:
                                accounts = _context.sent;
                                _context.next = 7;
                                return _tenants2.default.methods.getTenant(tenantId).call();

                            case 7:
                                tenantDetails = _context.sent;
                                flatNum = tenantDetails[2];
                                _context.prev = 9;
                                _context.next = 12;
                                return _tenants2.default.methods.deleteTenant(tenantId, flatNum).send({ from: accounts[0], gas: 500000 });

                            case 12:
                                result = _context.sent;
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context['catch'](9);

                                console.log(_context.t0.message);

                            case 18:
                                _this.setState({ loading: false });
                                _routes.Router.pushRoute('/');

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[9, 15]]);
            }));

            return function (_x, _x2) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RentIndex, [{
        key: 'renderTenantIds',
        value: function renderTenantIds() {
            var _this3 = this;

            var items = this.props.tenantIds.map(function (tenantId) {
                var localTenantId = tenantId;
                return {

                    header: _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                        }
                    }, _react2.default.createElement(_routes.Link, { route: '/tenants/' + tenantId, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                        }
                    }, _react2.default.createElement(_semanticUiReact.Label, { color: 'blue', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                        }
                    }, 'TenantID :', tenantId))),
                    extra: _react2.default.createElement('div', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 45
                        }
                    }, _react2.default.createElement(_routes.Link, { route: '/edittenant/' + tenantId, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 46
                        }
                    }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 47
                        }
                    }, 'Edit Tenant')), _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'red',
                        onClick: function onClick(event, localTenantId) {
                            return _this3.deleteTenant(event, tenantId);
                        }, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 51
                        }
                    }, 'Delete Tenant'))
                };
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, 'Tenants'), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, onClickOutside: this.handleClose, page: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', icon: true, inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'delete', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }), 'Deleteing Tenant', _react2.default.createElement(_semanticUiReact.Header.Subheader, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'Please wait...'))), this.renderTenantIds());
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
                var tenantIdList, tenantIds;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _tenants2.default.methods.getTenantsIds().call();

                            case 2:
                                tenantIdList = _context2.sent;
                                tenantIds = [];

                                tenantIdList.map(function (tenanatId) {
                                    if (tenanatId > 0) {
                                        tenantIds.push(tenanatId);
                                    }
                                    return _react2.default.createElement('div', {
                                        __source: {
                                            fileName: _jsxFileName,
                                            lineNumber: 18
                                        }
                                    });
                                });

                                return _context2.abrupt('return', { tenantIds: tenantIds });

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps() {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RentIndex;
}(_react.Component);

exports.default = RentIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkxheW91dCIsInRlbmFudHNJbnN0YW5jZSIsIkNhcmQiLCJCdXR0b24iLCJMYWJlbCIsIkhlYWRlciIsIkRpbW1lciIsIkljb24iLCJMaW5rIiwiUm91dGVyIiwid2ViMyIsIlJlbnRJbmRleCIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsImRlbGV0ZVRlbmFudCIsImV2ZW50IiwidGVuYW50SWQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJnZXRUZW5hbnQiLCJjYWxsIiwidGVuYW50RGV0YWlscyIsImZsYXROdW0iLCJzZW5kIiwiZnJvbSIsImdhcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJtZXNzYWdlIiwicHVzaFJvdXRlIiwiaXRlbXMiLCJwcm9wcyIsInRlbmFudElkcyIsIm1hcCIsImxvY2FsVGVuYW50SWQiLCJoZWFkZXIiLCJleHRyYSIsImhhbmRsZUNsb3NlIiwicmVuZGVyVGVuYW50SWRzIiwiZ2V0VGVuYW50c0lkcyIsInRlbmFudElkTGlzdCIsInRlbmFuYXRJZCIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBcUI7Ozs7QUFDNUIsQUFBUyxBQUFLLEFBQU8sQUFBTSxBQUFPLEFBQVE7O0FBQzFDLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVU7Ozs7Ozs7OztJQUdYLEE7Ozs7Ozs7Ozs7Ozs7OztzTixBQWdCRjswQkFBUSxBQUNVLEFBQ2Q7cUJBRkksQSxBQUVLO0FBRkwsQUFDSixpQixBQXNDQTtpR0FBZSxpQkFBQSxBQUFPLE9BQVAsQUFBYSxVQUFiO3NEQUFBOzhFQUFBOzhCQUFBO3lEQUFBO2lDQUNYO3NDQUFBLEFBQU0sQUFDTjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUZKLEFBRVgsQUFBYyxBQUFVO2dEQUZiO3VDQUdZLGNBQUEsQUFBSyxJQUhqQixBQUdZLEFBQVM7O2lDQUExQjtBQUhLLG9EQUFBO2dEQUFBO3VDQUtpQixrQkFBQSxBQUFnQixRQUFoQixBQUF3QixVQUF4QixBQUFrQyxVQUxuRCxBQUtpQixBQUE0Qzs7aUNBQWxFO0FBTEsseURBTUw7QUFOSywwQ0FNSyxjQU5MLEFBTUssQUFBYztnREFObkI7Z0RBQUE7dUNBU1csa0JBQUEsQUFBZ0IsUUFBaEIsQUFBd0IsYUFBeEIsQUFBcUMsVUFBckMsQUFBOEMsU0FBOUMsQUFDTCxLQUFLLEVBQUMsTUFBTSxTQUFQLEFBQU8sQUFBUyxJQUFHLEtBVjlCLEFBU1csQUFDQSxBQUF3Qjs7aUNBRHZDO0FBVEksa0RBQUE7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBWVA7O3dDQUFBLEFBQVEsSUFBSSxZQVpMLEFBWVAsQUFBZ0I7O2lDQUVwQjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFmLEFBQWMsQUFBVSxBQUN4QjsrQ0FBQSxBQUFPLFVBZkksQUFlWCxBQUFpQjs7aUNBZk47aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OzswQ0FsQ0Y7eUJBQ2I7O2dCQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUFxQixJQUFJLG9CQUFZLEFBQy9DO29CQUFNLGdCQUFOLEFBQXNCLEFBQ3RCOzs7NENBR0ksY0FBQTs7c0NBQUE7d0NBQUEsQUFDQTtBQURBO0FBQUEscUJBQUEsa0JBQ0EsQUFBQyw4QkFBSyxxQkFBTixBQUF5QjtzQ0FBekI7d0NBQUEsQUFDSTtBQURKO3VDQUNJLEFBQUMsd0NBQU0sT0FBUCxBQUFhO3NDQUFiO3dDQUFBO0FBQUE7dUJBQ2dCLGNBTmxCLEFBR0YsQUFDQSxBQUNJLEFBTUo7MkNBQ1EsY0FBQTs7c0NBQUE7d0NBQUEsQUFDSTtBQURKO0FBQUEscUJBQUEsa0JBQ0ksQUFBQyw4QkFBSyx3QkFBTixBQUE0QjtzQ0FBNUI7d0NBQUEsQUFDQTtBQURBO3VDQUNBLEFBQUMseUNBQU8sT0FBUixNQUFjLE9BQWQsQUFBb0I7c0NBQXBCO3dDQUFBO0FBQUE7dUJBRkosQUFDSSxBQUNBLEFBSUEsaUNBQUEsQUFBQyx5Q0FBTyxPQUFSLE1BQWMsT0FBZCxBQUFvQixBQUNoQjtpQ0FDQSxpQkFBQSxBQUFDLE9BQUQsQUFBTyxlQUFQO21DQUF5QixPQUFBLEFBQUssYUFBTCxBQUFrQixPQUEzQyxBQUF5QixBQUF3QjtBQUZyRDtzQ0FBQTt3Q0FBQTtBQUFBO3VCQWxCaEIsQUFBTSxBQVlNLEFBTUksQUFRbkI7QUExQlMsQUFFTjtBQUpKLEFBQWMsQUE4QmQsYUE5QmM7O2lEQThCTixBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUixBQUFRLEFBQ1g7QUFEVzthQUFBOzs7O2lDQXFCSixBQUNKO21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0E7QUFEQTtBQUFBLGFBQUEsa0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLDRCQUFBLEFBQUMseUNBQU8sUUFBUSxLQUFBLEFBQUssTUFBckIsQUFBMkIsU0FBUyxnQkFBZ0IsS0FBcEQsQUFBeUQsYUFBYSxNQUF0RTs4QkFBQTtnQ0FBQSxBQUNFO0FBREY7K0JBQ0UsQUFBQyx5Q0FBTyxJQUFSLEFBQVcsTUFBSyxNQUFoQixNQUFxQixVQUFyQjs4QkFBQTtnQ0FBQSxBQUNFO0FBREY7K0JBQ0UsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7OEJBQVg7Z0NBREYsQUFDRTtBQUFBO2dCQUVBLG9DQUFDLGNBQUQsd0JBQUEsQUFBUTs7OEJBQVI7Z0NBQUE7QUFBQTtBQUFBLGVBTkosQUFFQSxBQUNFLEFBR0UsQUFHSCwwQkFWRCxBQUNBLEFBU0MsQUFBSyxBQUdUOzs7Ozs7Ozs7Ozs7dUNBcEY4QixrQkFBQSxBQUFnQixRQUFoQixBQUF3QixnQkFBeEIsQUFBd0MsQTs7aUNBQTdEO0EseURBQ0Y7QSw0Q0FBVyxBLEFBQ2Y7OzZDQUFBLEFBQWEsSUFBSSxxQkFBWSxBQUN6Qjt3Q0FBRyxZQUFILEFBQWEsR0FBRSxBQUNYO2tEQUFBLEFBQVUsS0FBVixBQUFlLEFBQ2xCO0FBQ0Q7OztzREFBTzt3REFBUCxBQUFPLEFBQ1Y7QUFEVTtBQUFBLHFDQUFBO0FBSlg7O2tFQU9PLEVBQUMsVyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWlMsQSxBQTBGeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRTovTWFuaSBGb2xkZXIvQmxvY2tjaGFpbi9FdGhlcmV1bV9VZGVteV9Qcm9qZWN0cy9Qcm9qZWN0NF9STVMifQ==
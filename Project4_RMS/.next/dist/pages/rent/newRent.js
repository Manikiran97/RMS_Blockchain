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

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _rent = require('../../ethereum/rent');

var _rent2 = _interopRequireDefault(_rent);

var _semanticUiReact = require('semantic-ui-react');

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'E:\\Mani Folder\\Blockchain\\Ethereum_Udemy_Projects\\Project4_RMS\\pages\\rent\\newRent.js?entry';


var RentNew = function (_Component) {
    (0, _inherits3.default)(RentNew, _Component);

    function RentNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RentNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RentNew.__proto__ || (0, _getPrototypeOf2.default)(RentNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            tenantId: '',
            faltNum: '',
            advanceAmt: '',
            rent: '',
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var d, year, month, accounts, _result;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                //set State for spinner
                                _this.setState({ loading: true, errorMessage: '' });

                                console.log('On Submit of New Rent');
                                _context.prev = 3;
                                d = new Date();
                                year = d.getFullYear();
                                month = d.getMonth() + 1;
                                _context.next = 9;
                                return _web2.default.eth.getAccounts();

                            case 9:
                                accounts = _context.sent;

                                console.log('Month is:', month);
                                _context.next = 13;
                                return _rent2.default.methods.addRent(_this.state.faltNum, _this.state.rent, _this.state.tenantId, month, year).send({ from: accounts[0],
                                    gas: 210000 });

                            case 13:
                                _result = _context.sent;

                                _routes.Router.pushRoute('/');
                                _context.next = 20;
                                break;

                            case 17:
                                _context.prev = 17;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 20:
                                _this.setState({ loading: false });

                                if (result == 0) {
                                    console.log('Tenant Addition unsucessful');
                                } else {
                                    console.log('Tenant Addition unsucessful');
                                }

                            case 22:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[3, 17]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RentNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'New Rent Form'), _react2.default.createElement(_semanticUiReact.Form, { size: 'mini', onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, ' Flat Number'), _react2.default.createElement(_semanticUiReact.Input, {
                type: 'text',
                value: this.state.faltNum,
                onChange: function onChange(event) {
                    return _this3.setState({ faltNum: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 65
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, ' Rent Amount'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.rent,
                onChange: function onChange(event) {
                    return _this3.setState({ rent: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, ' TenanatID'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.tenantId,
                onChange: function onChange(event) {
                    return _this3.setState({ tenantId: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops!', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, ' Submit')));
        }
    }]);

    return RentNew;
}(_react.Component);

exports.default = RentNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxyZW50XFxuZXdSZW50LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwicmVudCIsIkZvcm0iLCJJbnB1dCIsIk1lc3NhZ2UiLCJCdXR0b24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIlJlbnROZXciLCJzdGF0ZSIsInRlbmFudElkIiwiZmFsdE51bSIsImFkdmFuY2VBbXQiLCJlcnJvck1lc3NhZ2UiLCJsb2FkaW5nIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiZCIsIkRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJhZGRSZW50Iiwic2VuZCIsImZyb20iLCJnYXMiLCJyZXN1bHQiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7OztBQUNqQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxBQUFNLEFBQWM7Ozs7Ozs7SSxBQUV2Qjs7Ozs7Ozs7Ozs7Ozs7O2tOQUNGLEE7c0JBQVEsQUFDSyxBQUNUO3FCQUZJLEFBRUksQUFDUjt3QkFISSxBQUdPLEFBQ1g7a0JBSkksQUFJQyxBQUNMOzBCQUxJLEFBS1UsQUFDZDtxQkFOSSxBQU1LLEE7QUFOTCxBQUNKLGlCQVFKLEE7aUdBQVcsaUJBQUEsQUFBTyxPQUFQOzhDQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBQ047QUFDQTtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUFELEFBQVUsTUFBTSxjQUE5QixBQUFjLEFBQThCLEFBRTVDOzt3Q0FBQSxBQUFRLElBTEQsQUFLUCxBQUFZO2dEQUdOO0FBUkMsb0NBUUcsSUFSSCxBQVFHLEFBQUksQUFDUjtBQVRDLHVDQVNNLEVBVE4sQUFTTSxBQUFFLEFBQ1Q7QUFWQyx3Q0FVTyxFQUFBLEFBQUUsYUFWVCxBQVVvQjtnREFWcEI7dUNBV2dCLGNBQUEsQUFBSyxJQVhyQixBQVdnQixBQUFTOztpQ0FBMUI7QUFYQyxvREFZUDs7d0NBQUEsQUFBUSxJQUFSLEFBQVksYUFaTCxBQVlQLEFBQXdCO2dEQVpqQjt1Q0FhYyxlQUFBLEFBQUssUUFBTCxBQUFhLFFBQVEsTUFBQSxBQUFLLE1BQTFCLEFBQWdDLFNBQVEsTUFBQSxBQUFLLE1BQTdDLEFBQW1ELE1BQUssTUFBQSxBQUFLLE1BQTdELEFBQW1FLFVBQW5FLEFBQTZFLE9BQTdFLEFBQW1GLE1BQW5GLEFBQ3FCLE9BQU0sTUFBTSxTQUFQLEFBQU8sQUFBUyxBQUNuQjt5Q0FmckMsQUFhYyxBQUMwQixBQUNFLE1BREY7O2lDQUR6QztBQWJDLG1EQWdCUDs7K0NBQUEsQUFBTyxVQWhCQSxBQWdCUCxBQUFpQjtnREFoQlY7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBa0JIOztzQ0FBQSxBQUFLLFNBQVMsRUFBQyxjQUFjLFlBbEIxQixBQWtCSCxBQUFjLEFBQW1COztpQ0FFckM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBZixBQUFjLEFBQVUsQUFHeEI7O29DQUFHLFVBQUgsQUFBYSxHQUFFLEFBQ1g7NENBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQUZELHVDQUVLLEFBQ0Q7NENBQUEsQUFBUSxJQUFSLEFBQVksQUFDZjtBQTNCTTs7aUNBQUE7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FnQ0g7eUJBQ0o7O21DQUNBLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUE7QUFGQTtBQUFBLGFBQUEsa0JBRUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBRkEsQUFFQSxBQUNBLGtDQUFBLEFBQUMsdUNBQUssTUFBTixBQUFXLFFBQU8sVUFBVyxLQUE3QixBQUFrQyxVQUFVLE9BQVEsQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUEzRCxBQUFpRTs4QkFBakU7Z0NBQUEsQUFDSTtBQURKOytCQUNLLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGlDQUFBLEFBQUM7c0JBQUQsQUFDUyxBQUNMO3VCQUFTLEtBQUEsQUFBSyxNQUZsQixBQUV3QixBQUNwQjswQkFBWSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFDLFNBQVMsTUFBQSxBQUFNLE9BQXZDLEFBQVMsQUFBYyxBQUF1QjtBQUg5RDs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1QLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLGlDQUFBLEFBQUM7dUJBQ1ksS0FBQSxBQUFLLE1BRGxCLEFBQ3dCLEFBQ3BCOzBCQUFZLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsTUFBTSxNQUFBLEFBQU0sT0FBcEMsQUFBUyxBQUFjLEFBQW9CO0FBRjNEOzs4QkFBQTtnQ0FaUixBQVVJLEFBRUksQUFNSjtBQU5JO0FBQ0ksaUNBS1AsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsK0JBQUEsQUFBQzt1QkFDWSxLQUFBLEFBQUssTUFEbEIsQUFDd0IsQUFDcEI7MEJBQVkseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFVLE1BQUEsQUFBTSxPQUF4QyxBQUFTLEFBQWMsQUFBd0I7QUFGL0Q7OzhCQUFBO2dDQXBCUixBQWtCSSxBQUVJLEFBT0o7QUFQSTtBQUNJLGlDQU1SLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBM0JKLEFBMkJJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBVyxLQUFBLEFBQUssTUFBaEMsQUFBc0M7OEJBQXRDO2dDQUFBO0FBQUE7ZUFoQ0osQUFDQSxBQUdBLEFBNEJJLEFBTVA7Ozs7O0FBakZpQixBLEFBcUZ0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXdSZW50LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkU6L01hbmkgRm9sZGVyL0Jsb2NrY2hhaW4vRXRoZXJldW1fVWRlbXlfUHJvamVjdHMvUHJvamVjdDRfUk1TIn0=
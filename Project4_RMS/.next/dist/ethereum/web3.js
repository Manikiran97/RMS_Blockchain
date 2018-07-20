'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/*Whole purpose of this file is to create the instance of web3(installed version) with injected web3 provider */
var Web3 = require('web3');

var web3 = void 0;
if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
    //typeof window != 'undefined' --> Checks if we are in browser
    //typeof window.web3 != 'undefined'Checks if Metamask is available
    web3 = new Web3(window.web3.currentProvider);
    console.log('Web3:Metamask is available');
} else {
    //Page renders at server side or Metamask is not available
    var provider = new Web3.providers.HttpProvider(
    //This is the URL of the Infura remote node that we have access to.
    'https://rinkeby.infura.io/vQ8OFrDgJMf9DcuPYGQw');

    web3 = new Web3(provider);
    console.log('Web3:Metamask is not available');
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJyZXF1aXJlIiwid2ViMyIsIndpbmRvdyIsImN1cnJlbnRQcm92aWRlciIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLElBQU0sT0FBTyxBQUFQLEFBQU47O0FBRUEsSUFBSSxZQUFKO0FBQ0EsSUFBRyxPQUFPLEFBQVAsVUFBaUIsQUFBakIsZUFBZ0MsT0FBTyxPQUFPLEFBQWQsUUFBc0IsQUFBekQsYUFBcUUsQUFDakU7QUFDQTtBQUNBO1dBQU8sSUFBSSxBQUFKLEtBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNBO1lBQVEsQUFBUixJQUFZLEFBQVosQUFDSDtBQUxELE9BS0ssQUFDRDtBQUNBO1FBQU0sV0FBVyxJQUFJLEtBQUssQUFBTCxVQUFlLEFBQW5CLEFBQ2I7QUFDQTtBQUZhLEFBQWpCLEFBS0E7O1dBQU8sSUFBSSxBQUFKLEtBQVMsQUFBVCxBQUFQLEFBQ0E7WUFBUSxBQUFSLElBQVksQUFBWixBQUNIO0FBRUQ7O2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiJFOi9NYW5pIEZvbGRlci9CbG9ja2NoYWluL0V0aGVyZXVtX1VkZW15X1Byb2plY3RzL1Byb2plY3Q0X1JNUyJ9
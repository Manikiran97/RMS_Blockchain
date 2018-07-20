//import web3 from '../web3';

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');


const tenants = require('../ethereum/build/Tenants.json');
const rent = require('../ethereum/build/Rent.json');

const provider = new HDWalletProvider(
    'empty feature tent thing rabbit bomb slender fiscal hammer differ aspect soup ',
    'https://rinkeby.infura.io/vQ8OFrDgJMf9DcuPYGQw'
);

const web3 = new Web3(provider);

const deploy = async() => {
    const accounts = await web3.eth.getAccounts();
    console.log('Account is: ', accounts[0]); 

    
    //await web3.eth.sendTransaction({from: accounts[0], to:'0x627306090abaB3A6e1400e9345bC60c78a8BEf57', value: 1000000000000000000, gasLimit: 21000, gasPrice: 20000000000});
    //console.log('Ether transferred');

    const tenantsResult = await new web3.eth.Contract(JSON.parse(tenants.interface))
                      .deploy({data: '0x'+tenants.bytecode})
                      .send({from: accounts[0],gas: '5000000'});

    const tenantsAddress = tenantsResult.options.address;          
          
    console.log('Tenants is deployed at: ',tenantsAddress);
    

    const rentResult = await new web3.eth.Contract(JSON.parse(rent.interface))
                      .deploy({data: '0x'+rent.bytecode,arguments: [tenantsAddress]})
                      //.deploy({data: bytecode,          arguments: ['Hi there!']})
                      .send({from: accounts[0],gas: '5000000'});

                      
    console.log('Rent is deployed at: ',rentResult.options.address);

};

deploy();



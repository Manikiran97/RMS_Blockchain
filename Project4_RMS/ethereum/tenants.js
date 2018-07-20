import web3 from './web3';
import  Tenants from './build/Tenants.json'

const instance = new web3.eth.Contract(
                        JSON.parse(Tenants.interface),
                        '0xA4B95859AAdA4BdAb846Abb171F4e2635934f522');

export default instance;
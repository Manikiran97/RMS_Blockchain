import web3 from './web3';
import  Rent from './build/Rent.json'

const instance = new web3.eth.Contract(
                        JSON.parse(Rent.interface),
                        '0x5e013Cb71c615e8d8250E32FB31C1ba03D7ADf22');
export default instance;



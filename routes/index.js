var express = require('express');
var router = express.Router();
let simpleStorageAbi = require('abis');
let Web3 = require('web3');
const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0x262E2078217937978cccd3a08681AdD77D5DdFE3';
const SimpleContract = new web3.eth.Contract(simpleStorageAbi, contractAddr);

/* GET home page. */

router.get('/',async function(req, res, next) {
  /*const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setname(name).estimateGas();
    const result = await SimpleContract.methods.setname(name).send({
      from: account,
      gas 
    })*/
    const result = await SimpleContract.methods.getname().call();
    //setGetName(result);
  res.send(result);
});

/*router.post('/', function(req, res, next) {
  const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const gas = await SimpleContract.methods.setname(name).estimateGas();
    const result = await SimpleContract.methods.setname(name).send({
      from: account,
      gas 
    })
    
  res.send(result);
});*/

module.exports = router;

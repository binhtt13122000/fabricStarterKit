/**
 * Hyperledger Fabric REST API
 * @rbole 
 */

const _ = require('lodash');

  'use strict';
  module.exports = async function (req, contract) {
   
    // Get the keys and value from the POST request.
    console.log(_.get(req,'body',false))
    let no = _.get(req,'body.no',false);
    if(!no){
      return {r:'Failed to submit transaction: no valid set'};
    }

    let type = _.get(req,'body.type','');
    let content = _.get(req,'body.content','');
    let date = _.get(req,'body.date','');
   
    //  Set the keys to lowercase, because of the chaincode.
    no = no.toString().toLowerCase();
    
    let value = {'no':no, 'content':content, 'date':date, 'type':type};
    value = JSON.stringify(value);
    try {
        /* 
        Submit the specified transaction.
        Submit a transaction to the ledger. The transaction function name will be evaluated on the endorsing peers and then submitted to the ordering service for committing to the ledger. 
        */
        await contract.submitTransaction('starter:set', value);
      
      // Prepare the return value.
      let r = 'Transaction has been successfully submitted: '+no;
      return r;
    }
    catch(error){
      let r = {r:'Failed to submit transaction: '+error};
      return r;
   }
 }
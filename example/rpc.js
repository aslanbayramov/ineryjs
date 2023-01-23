const Inery = require("ineryjs");

// Connect to Inery node

const inery = new Inery("http://localhost:4000");

// Build the transaction

const tx = inery.transaction.transfer("INR", "Address_of_the_recipient", "100", "memo");

// Sign the transaction

const signedTx = inery.transaction.sign(tx, "private_key_of_the_sender");

// Send the transaction

inery.transaction.push(signedTx).then((tx) => {

  console.log(tx);

}).catch((err) => {

  console.error(err);

});

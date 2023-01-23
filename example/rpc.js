const Inery = require("ineryjs");

// Connect to Inery node

const inery = new Inery("http://5.75.228.144:8888");

// Build the transaction

const tx = inery.transaction.transfer("INR", "imery", "0.0001", "memo");

// Sign the transaction

const signedTx = inery.transaction.sign(tx, "5KNyNrcgF5BoaDZcBd9BTAFTXC3RPsBud358aA8nsC7ZXDwJq8o");

// Send the transaction

inery.transaction.push(signedTx).then((tx) => {

  console.log(tx);

}).catch((err) => {

  console.error(err);

});

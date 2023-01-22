require('dotenv').config();

const { Api, JsonRpc } = require('ineryjs');
const { JsSignatureProvider } = require('ineryjs/dist/ineryjs-jssig');
const { PrivateKey } = require('ineryjs/dist/PrivateKey');

const url = process.env.URL;
const private_key = process.env.PRIVATE_KEY;
const actor = process.env.ACTOR;
const account = process.env.ACCOUNT;

const signatureProvider = new JsSignatureProvider([private_key]);
const rpc = new JsonRpc(url);
const api = new Api({ rpc, signatureProvider });

const tx = api.buildTransaction();
tx.with(account).as(actor).create("id", "user", { data: "example" });
tx.send().then((result) => {
    console.log(result);
}).catch((error) => {
    console.error(error);
});

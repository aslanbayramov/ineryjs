import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'ineryjs/dist/index.js'

const url = process.env.NODE_URL

const json_rpc = new JsonRpc(url)
const private_key = process.env.PRIVATE_KEY;

const account = process.env.INERY_ACCOUNT
const actor = process.env.INERY_ACCOUNT
const signature  = new JsSignatureProvider([private_key]);

const api = new Api({
  rpc: json_rpc,
  signatureProvider: signature
})

async function create(id, user, data){
  try{
    const tx = api.buildTransaction();
    tx.with(account).as(actor).create({id, user, data});
    console.log(await tx.send());
} catch (error) {
  console.log(error);
  }
}

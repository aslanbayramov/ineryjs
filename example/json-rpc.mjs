import dotenv from 'dotenv';
dotenv.config();
import {Api} from 'ineryjs';
const api = new Api({url:process.env.url});
const account = process.env.account;
const privateKey = process.env.private_key;
const actor = process.env.actor;
const data = {...};
              
try {
    const tx = api.buildTransaction();
    tx.with(account).as(actor).action_name(data);
    tx.sign(privateKey);
    console.log(await tx.send());
} catch(error) {
    console.error(error);
}

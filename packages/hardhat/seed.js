const fs = require("fs");
const ethers = require("ethers");

const mnemonic = fs.readFileSync("./mnemonic.txt").toString().trim();
const mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
console.log(mnemonicWallet.privateKey);

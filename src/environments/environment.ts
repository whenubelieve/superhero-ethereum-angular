// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
declare const require;
const ABI = require('../../build_ropsten/contracts/Superheroes.json');
export const environment = {
  production: false,
  networkID: 3,
  RPCProvider: 'http://localhost:7545',
  RPCWSSProvider: 'ws://localhost:7545',
  TronRPCProvider: 'https://api.shasta.trongrid.io/wallet/triggersmartcontract',
  TronContractAddress: '4187d45be1d6fd9525446c20caf1174c2c9023faf7',
  ABI
};

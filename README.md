# MarX Decentralized Exchange

[![Actions Status](https://github.com/marx-dex-deployer/marx-dex-v2-core/workflows/CI/badge.svg)](https://github.com/marx-dex-deployer/marx-dex-v2-core/actions)
[![Version](https://img.shields.io/npm/v/@marx-dex/marx-dex-v2-core)](https://www.npmjs.com/package/@marx-dex/marx-dex-v2-core)

The built contract artifacts can be browsed via [unpkg.com](https://unpkg.com/browse/@marx-dex/marx-dex-v2-core@latest/).

# Local Development

The following assumes the use of `node@>=10`.

## Install Dependencies

`yarn`

## Compile Contracts

`yarn compile`

## Run Tests

`yarn test`

## Contracts deployed to evmos testnet

- [MarXDEXV2Factory contract](https://evm.evmos.org/address/0x534022D5a24b90f25899F204307033ED27969326/contracts)

## Run scripts

`truffle exec scripts/create_pairs.js --network evmos`
`truffle exec scripts/test_factory_contract.js --network evmos`

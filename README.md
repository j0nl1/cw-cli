# COSMWASM CLI

This package is a cli that allows cosmwasm to interact with different networks.

[![GitHub license](https://img.shields.io/github/license/j0nl1/cw-cli.svg?color=blue&style=for-the-badge)](./LICENSE)
[![npm](https://img.shields.io/npm/v/cosmwasm-cli.svg?color=green&style=for-the-badge)](https://www.npmjs.com/package/cosmwasm-cli)

## Installation

```sh
npm i -g cosmwasm-cli
```

> :warning: **Is necessary to config a key in order to interact with the cli**

## API Usage

```sh
Usage: cwcli [command]

Cosmwasm Command Line Interface

Options:
  -V, --version   output the version number
  -h, --help      display help for command

Commands:
  keys [command]           manage your keys
  networks [command]       manage networks
  wasm [command]           wasm transaction subcommands
```

> **Wasm Command**

```sh
Usage: cwcli wasm [command]

Wasm transaction subcommands

Options:
  -h, --help                  display help for command

Commands:
  upload <wasm file>          Upload a wasm binary
  query <address> <msg>       Querying commands for contracts
  execute <address> <msg>     execute a smart contract method
  instantiate <codeId> <msg>  instantiate an uploaded contract
```

> **Keys Command**

```sh
Usage: cwcli keys [command]

Manage your keys

Options:
  -h, --help     display help for command

Commands:
  add <name>     Add an encrypted private key (either newly generated or recovered), encrypt it, and save to keyring
  delete <name>  Delete keys from the cli
  show <name>    Return address depending on network selection
  list           Return a list of all public keys stored by this cli
```

> **Network Command**

```sh
Usage: cwcli networks [command]

Manage networks

Options:
  -h, --help      display help for command

Commands:
  add <filePath>  Load a custom network
  delete <name>   Remove a custom network
  list            show a list of networks
```



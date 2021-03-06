/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BoringFactory } from "../BoringFactory";

export class BoringFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BoringFactory> {
    return super.deploy(overrides || {}) as Promise<BoringFactory>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BoringFactory {
    return super.attach(address) as BoringFactory;
  }
  connect(signer: Signer): BoringFactory__factory {
    return super.connect(signer) as BoringFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BoringFactory {
    return new Contract(address, _abi, signerOrProvider) as BoringFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cloneAddress",
        type: "address",
      },
    ],
    name: "LogDeploy",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "masterContract",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "useCreate2",
        type: "bool",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "masterContractOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103f8806100206000396000f3fe6080604052600436106100295760003560e01c80631f54245b1461002e578063bafe4f1414610043575b600080fd5b61004161003c3660046102a4565b610079565b005b34801561004f57600080fd5b5061006361005e366004610282565b61024a565b604051610070919061034a565b60405180910390f35b6001600160a01b0384166100a85760405162461bcd60e51b815260040161009f9061038d565b60405180910390fd5b606084901b6000821561011c57600085856040516100c792919061033a565b60405180910390209050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528360148201526e5af43d82803e903d91602b57fd5bf360881b6028820152816037826000f592505050610161565b604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150505b6001600160a01b0381811660008181526020819052604090819020805473ffffffffffffffffffffffffffffffffffffffff1916938a16939093179092559051631377d1f560e21b8152634ddf47d49034906101c3908990899060040161035e565b6000604051808303818588803b1580156101dc57600080fd5b505af11580156101f0573d6000803e3d6000fd5b5050505050806001600160a01b0316866001600160a01b03167fd62166f3c2149208e51788b1401cc356bf5da1fc6c7886a32e18570f57d88b3b878760405161023a92919061035e565b60405180910390a3505050505050565b6000602081905290815260409020546001600160a01b031681565b80356001600160a01b038116811461027c57600080fd5b92915050565b600060208284031215610293578081fd5b61029d8383610265565b9392505050565b600080600080606085870312156102b9578283fd5b6102c38686610265565b9350602085013567ffffffffffffffff808211156102df578485fd5b818701915087601f8301126102f2578485fd5b813581811115610300578586fd5b886020828501011115610311578586fd5b6020830195508094505050506040850135801515811461032f578182fd5b939692955090935050565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b60006020825282602083015282846040840137818301604090810191909152601f909201601f19160101919050565b6020808252818101527f426f72696e67466163746f72793a204e6f206d6173746572436f6e747261637460408201526060019056fea2646970667358221220873f288268f6cb4bae16262f6cb75bc699edb35cc2d9be39d03756ac8221c0bd64736f6c634300060c0033";

import { ethers } from 'ethers';
import contractJsonFree from '../contracts/VoodooVaultAniversaryEdition.json';
import contractJsonNormal from '../contracts/voodooContractNormal.json';
import contractJsonBroken from '../contracts/VoodooVaultBrokenPass.json';

export const contractAddressFree =
  '0x04C2c9F538a15ED811BbEC8E5bCb0841e3480A5e';
export const contractAbiFree = contractJsonFree.abi;

export const contractAddressNormal =
  '0xb24EAc3AAD94B42Dd5ddffC927054f29b7451424';
export const contractAbiNormal = contractJsonNormal.abi;

export const contractAddressBroken =
  '0xD12df4e7E4264da0231b2Dd5DD9a00c4eA23FbC4';
export const contractAbiBroken = contractJsonBroken.abi;

export const getContract = (library, type) => {
  const librarySigner = library.getSigner();

  let contractAddress = undefined;
  if (type === 'normal') {
    contractAddress = contractAddressNormal;
  } else if (type === 'broken') {
    contractAddress = contractAddressBroken;
  } else {
    contractAddress = contractAddressFree;
  }

  let contractAbi = undefined;
  if (type === 'normal') {
    contractAbi = contractAbiNormal;
  } else if (type === 'broken') {
    contractAbi = contractAbiBroken;
  } else {
    contractAbi = contractAbiFree;
  }

  let ethersContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    librarySigner
  );

  return ethersContract;
};

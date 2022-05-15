import { ethers } from 'ethers';
import contractJsonNormal from '../contracts/voodooContractNormal.json';
import contractJsonBroken from '../contracts/VoodooVaultBrokenPass.json';

export const contractAddressNormal =
  '0xb24EAc3AAD94B42Dd5ddffC927054f29b7451424';
export const contractAbiNormal = contractJsonNormal.abi;

export const contractAddressBroken =
  '0xD12df4e7E4264da0231b2Dd5DD9a00c4eA23FbC4';
export const contractAbiBroken = contractJsonBroken.abi;

export const getContract = (library, type) => {
  const librarySigner = library.getSigner();

  const contractAddress =
    type === 'normal' ? contractAddressNormal : contractAddressBroken;
  const contractAbi =
    type === 'normal' ? contractAbiNormal : contractAbiBroken;

  let ethersContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    librarySigner
  );

  return ethersContract;
};

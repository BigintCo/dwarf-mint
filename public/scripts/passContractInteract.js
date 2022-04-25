import { ethers } from 'ethers'
import NFT from '../../artifacts/contracts/pass.sol/mintPass.json'
import { passContractAdress } from './const'

import { dwarfContractAddress } from "./const";


export const getOwner = async () => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(passContractAdress, NFT.abi, signer)
    const result = await nftContract.owner();
    console.log(result);
    return result
}

export const getOwnerTokenIds = async () => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(passContractAdress, NFT.abi, signer)
    const result = await nftContract.tokensOfOwner(window.ethereum.selectedAddress);
    return result
}

export const isGold = async (tokenId) => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(passContractAdress, NFT.abi, signer)
    const result = await nftContract.isGold(tokenId);
    return result
}

export const approveContract = async ( ) => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(passContractAdress, NFT.abi, signer)
    const result = await nftContract.setApprovalForAll(dwarfContractAddress, true);
    console.log("approve result",result)
    return result
}

export const isApproved = async () => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(passContractAdress, NFT.abi, signer)
    const result = await nftContract.isApprovedForAll(signer.getAddress(), dwarfContractAddress);
    return result
}

export const getPassOwnerBalance = async () => {

  try {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(passContractAdress, NFT.abi, signer)
    const result = await nftContract.balanceOf(window.ethereum.selectedAddress);
    return result;
  } catch (error) {
    return 0;
  }
  
}

export const mintNFT = async (quantity, isGold) => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(passContractAdress, NFT.abi, signer)

  if (!window.ethereum.selectedAddress) {
    return {
      success: false
    };
  }
  const transaction = await nftContract.ownerMint(quantity,isGold)
 
};
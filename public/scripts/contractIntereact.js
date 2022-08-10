import { ethers } from 'ethers'
import NFT from '../../artifacts/contracts/dwarf.sol/dwarfknights.json'
import { dwarfContractAddress } from './const'


export const getWalletAddress = async () => {
    var signerAdress
    try {
        const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()


    signerAdress = await signer.getAddress();
    } catch (error) {
        signerAdress = ""
    }
    
    return signerAdress;
}

export const getTotalSupply = async () => {
  try {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    // var signerAdress = await signer.getAddress();
    const nftContract = new ethers.Contract(dwarfContractAddress, NFT.abi, signer)
    const result = await nftContract.totalSupply();
    console.log("result");
    console.log(result);
    return result;

  } catch (error) {
    console.log("error");
    console.log(error);
    return 0;
  }
  
};

export const getSaleState = async () => {
  
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    var result;
    // var signerAdress = await signer.getAddress();
    const nftContract = new ethers.Contract(dwarfContractAddress, NFT.abi, signer)
    const resultOg = await nftContract.IS_OG_SALE_ACTIVE();
    const resultPre = await nftContract.IS_PRE_SALE_ACTIVE();
    const resultPublic = await nftContract.IS_PUBLIC_SALE_ACTIVE();
    if (resultOg && !resultPre && !resultPublic) {
      result = 1;
    }else if(!resultOg && resultPre && !resultPublic){
      result = 2;
    }else if(!resultOg && !resultPre && resultPublic){
      result = 3;
    }else{
      result = 0
    }
    return result;

  
};

export const getMaxSupply = async () => {
  try {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    // var signerAdress = await signer.getAddress();
    const nftContract = new ethers.Contract(dwarfContractAddress, NFT.abi, signer)
    const result = await nftContract.MAX_SUPPLY();
    return result;

  } catch (error) {
    return 0
  }
    
}


export const getOwner = async () => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

  // var signerAdress = await signer.getAddress();
    const nftContract = new ethers.Contract(dwarfContractAddress, NFT.abi, signer)
    const result = await nftContract.owner();
    return result
}


export const getOwnerBalance = async () => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()
    const nftContract = new ethers.Contract(dwarfContractAddress, NFT.abi, signer)
    try {
      const result = await nftContract.balanceOf(window.ethereum.selectedAddress);
      return result;
    } catch (error) {
      return 0;
    }
  
}
function calculateMintPrice(mintPrice,quantity){
  if (quantity > 1) {
    return (mintPrice-0.25)*quantity
  }else{
    return mintPrice*quantity
  }
}

export const ogMint = async (quantity) => {
    const connection = window.ethereum;
    const provider = new ethers.providers.Web3Provider(connection)
    const signer = provider.getSigner()

    const nftContract = new ethers.Contract(dwarfContractAddress, NFT.abi, signer)
    let mintPrice = calculateMintPrice(1,quantity) 
    console.log("value",mintPrice)

    var value= ethers.utils.parseEther(mintPrice.toString())
    if (!window.ethereum.selectedAddress) {
      return {
        success: false
      };
    }
    const transaction = await nftContract.ogSale(quantity,{ value: value })
    await transaction.wait().then(function(receipt) {
      document.getElementById("mintLink").innerHTML = "Successfully minted click and see!"
      //document.getElementById("mintLink").href = "https://testnet.snowtrace.io/tx/"+receipt.transactionHash
      document.getElementById("mintLink").href = "https://snowtrace.io/tx/"+receipt.transactionHash

  });
};

export const preMint = async (quantity) => {
  const connection = window.ethereum;
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()

  const nftContract = new ethers.Contract(dwarfContractAddress, NFT.abi, signer)
  let mintPrice = calculateMintPrice(1.25,quantity) 
  var value= ethers.utils.parseEther(mintPrice.toString())
  if (!window.ethereum.selectedAddress) {
    return {
      success: false
    };
  }
  const transaction = await nftContract.preSale(quantity,{ value: value })
  await transaction.wait().then(function(receipt) {
    document.getElementById("mintLink").innerHTML = "Successfully minted click and see!"
    //document.getElementById("mintLink").href = "https://testnet.snowtrace.io/tx/"+receipt.transactionHash
     document.getElementById("mintLink").href = "https://snowtrace.io/tx/"+receipt.transactionHash

});
};

export const publicMint = async (quantity) => {
  const connection = window.ethereum;
  const provider = new ethers.providers.Web3Provider(connection)
  const signer = provider.getSigner()

  const nftContract = new ethers.Contract(dwarfContractAddress, NFT.abi, signer)
  var mintPrice = quantity * 1.5
  var value= ethers.utils.parseEther(mintPrice.toString())
  if (!window.ethereum.selectedAddress) {
    return {
      success: false
    };
  }
  const transaction = await nftContract.publicSale(quantity,{ value: value })
  await transaction.wait().then(function(receipt) {
    document.getElementById("mintLink").innerHTML = "Successfully minted click and see!"
    //document.getElementById("mintLink").href = "https://testnet.snowtrace.io/tx/"+receipt.transactionHash
    document.getElementById("mintLink").href = "https://snowtrace.io/tx/"+receipt.transactionHash

});
};
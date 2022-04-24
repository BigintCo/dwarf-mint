import Layout from "../components/layout";
import Mint from "../components/mint";
import { useState,useEffect} from 'react'
import { getPassOwnerBalance,mintNFT,getOwnerTokenIds,isGold,isApproved,approveContract } from "../public/scripts/passContractInteract";
import {getTotalSupply,getOwnerBalance,ogMint,preMint,publicMint,getSaleState } from "../public/scripts/contractIntereact"

export default function Index() {
    const [isApprove, setIsApprove] = useState(false);  
    const [isSaleActive, setSaleActive] = useState(0); 
    const [totalSupply, setTotalSupply] = useState(0);
    const [ownerBalance, setOwnerBalance] = useState(0);
    const [ogBalance,setOgBalance] = useState(0);
    const [silverBalance,setSilverBalance] = useState(0);
    const maxSupply = 6666

    const Button = () => (    
        <>

        {totalSupply < maxSupply && isSaleActive == 1 && ogBalance == 0 && ownerBalance == 0 &&
            <p>You don't have OG Pass</p>} 

        {totalSupply < maxSupply && isSaleActive == 2 && silverBalance == 0 &&
            <p>You don't have Silver Pass</p>} 

        {isSaleActive != 0 && totalSupply < maxSupply  && 
        ((ogBalance > 0 && isSaleActive == 1 && isApprove) ||
        (silverBalance > 0 && isSaleActive == 2 && isApprove) ||
        isSaleActive == 3) &&
            <Mint data={mintFunction} total={totalSupply} max={maxSupply}  ownerBalance={ownerBalance} saleState={isSaleActive}
            ogBalance={ogBalance} silverBalance={silverBalance}/>} 

        {!isApprove && ((isSaleActive == 1 && ogBalance > 0) || (isSaleActive == 2 && silverBalance > 0)) &&
            <button onClick={approveToDwarf} className="btn">Approve</button>}
    
        {isSaleActive == 0 && totalSupply < maxSupply &&
            <p>Sale not started</p>} 
    
        { totalSupply == maxSupply &&
            <p>Sold out</p>} 
    
        {totalSupply < maxSupply && ((ownerBalance != 0 && ogBalance == 0 && isSaleActive == 1) ||
        (ownerBalance != 0 && silverBalance == 0 && isSaleActive == 2 )) &&
            <p>Already minted</p>} 
        </>
       )

    const approveToDwarf = () => {
        approveContract().then((res) => setIsApprove(res))
        }

    const mintFunction = async() => {
        var quantity = document.getElementById("quantity").value
        if (isSaleActive == 1) {
            await ogMint(quantity)            
        }else if(isSaleActive == 2){
            await preMint(quantity);
        }else if (isSaleActive == 3){
            await publicMint(quantity);
        }
    }
    
    const tokenIdsOfOwner =  () =>{
        getOwnerTokenIds().then((tokenIdsOfOwner) => {
            var gold = 0
            var silver = 0
            for (let i = 0; i < tokenIdsOfOwner.length; i++) {
                const tokenId = tokenIdsOfOwner[i].toNumber();
                isGold(tokenId).then((_isGold) => {
                    if(_isGold){
                        gold++
                    } else{
                        silver++
                    }
                    setOgBalance(gold)
                    setSilverBalance(silver)
                })               
            }
         
        })
    }
    ////

    useEffect(() => {
        getTotalSupply().then((tsupply)=> setTotalSupply(tsupply.toNumber()));
        getOwnerBalance().then((obalance)=> setOwnerBalance(obalance.toNumber()));
        isApproved().then((approve)=> setIsApprove(approve))
        getSaleState().then((sState) =>setSaleActive(sState))
        tokenIdsOfOwner()            
         
      },[]);
      
    return (
        <div className="container">
            <div className="row row-flex row-flex-top">
                <div className="col-6 center" id="mintGroup">
                    <Button/>
                    <a id="mintLink" href="#"></a>

                </div>
                <div className="col-6 left">
                    <h1>Dwarf Nights</h1>
                    <p>
                        A Collection of 6666 unique NFTs on Avalanche.
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <video src="https://dwarfassets.s3.eu-west-1.amazonaws.com/nfts.mp4" autoPlay muted loop="loop"/>
                </div>
                <div className="col-6">
                    <div className="description">
                        
                        <div className="row"><strong>Minting date:</strong><span>26 April 2022</span></div>
                        <div className="row"><strong>Total supply:</strong><span>6666</span></div>
                        <div className="row"><strong>Resale royalties:</strong><span>5% for all the NFTs holders</span></div>
                        <div className="row">
                            <strong>Description:</strong>
                            <p>
                                OG Sale costs 1 AVAX🔺, when minted more than one, the price will automatically decrease to 0.75 AVAX🔺
                            </p>
                            <p>
                                WL Sale costs 1.25 AVAX🔺, when minted more than one, the price will automatically decrease to 1 AVAX🔺
                            </p>
                            <p>
                                Public Sale costs 1.5 AVAX🔺 & will be open for everyone. 10 Dwarf Knights NFTs is the limit per transaction.
                            </p>
                        </div>
                        <div className="row links">
                            <ul>
                                <li>
                                    <a href="https://twitter.com/DwarfKnightNft" target="_blank" className="twitter">Twitter</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/dwarfknights" target="_blank" className="discord">Discord</a>
                                </li>
                                <li>
                                    <a href="https://dwarfknights.com/" target="_blank" className="website">Website</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Index.getLayout = function getLayout(page) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
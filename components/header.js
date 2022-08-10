import styles from '../styles/header.module.scss'
import { useState,useEffect} from 'react'
import { wchainId } from '../public/scripts/const';
import { connectWallet,getCurrentWalletConnected } from '../public/scripts/walletInteract'

export default function Header() {
    const [walletAddress, setWalletAddress] = useState("");   

    const connectWalletPressed = async () => {

        const walletResponse = await connectWallet();
        var _chainId = window.ethereum.chainId 
        console.log(_chainId)
        if (_chainId == wchainId) {
            setWalletAddress(walletResponse.address);
        }else{
            document.getElementById("chainCheck").innerHTML = "Unsupported chain, please switch to c-chain";
            setWalletAddress("")
            document.getElementById("mintGroup").innerHTML= ""

        }
    };

    const addWalletListener = () => {
        if (window.ethereum) {
          window.ethereum.on("chainChanged", async (chainId) => {

            if (chainId == wchainId) {
              setWalletAddress(window.ethereum.selectedAddress);
            } else {
              setWalletAddress("");
              document.getElementById("chainCheck").innerHTML = "Unsupported chain, please switch to c-chain";
              document.getElementById("mintGroup").innerHTML= ""
            }

            location.reload()

          });

          window.ethereum.on("accountsChanged", async (accounts) => {
            location.reload()
            setWalletAddress("");
          });

        }
      };

    useEffect(() => {
        const prepare = async () => {
          if(window.ethereum != undefined) { 
            const walletResponse = await getCurrentWalletConnected();

            if (window.ethereum.chainId == wchainId) {
              setWalletAddress(walletResponse.address);
            }else{
              setWalletAddress("")
              document.getElementById("chainCheck").innerHTML = "Unsupported chain, please switch to c-chain";
              document.getElementById("mintGroup").innerHTML= ""
            }

          addWalletListener();
          }
        };
        prepare()
      }, []);

    return (
        <div className={styles.header}>
            <div className="container">
                <div className="row row-flex">
                    <div className="col-6 left">
                        <div className={styles.logo}>
                            <img src="/assets/img/logo.png" alt="Logo"/>
                        </div>
                    </div>
                    <div className="col-6 right">
                    {walletAddress ? (
                            "Connected: " +
                            String(walletAddress).substring(0, 6) +
                            "..." +
                            String(walletAddress).substring(38)
                        ): (
                    <>
                        <button type='button' onClick={connectWalletPressed} className='btn'>Connect Wallet</button>                        
                    </>
                        )}      
                        <p id="chainCheck"></p>              
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )
}
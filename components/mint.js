import React, {useEffect,useState} from 'react';

import styles from '../styles/mint.module.scss'

export default function Mint(props) {
    const [price,setPrice] = useState(1);

    useEffect(() => {
        document.querySelector(".minusBtn").addEventListener("click", clickHandler);
        document.querySelector(".plusBtn").addEventListener("click", clickHandler);
        
       

         if(props.saleState == 1){
             setPrice(1)
         }else if(props.saleState == 2){
             setPrice(1.25)
         }else if(props.saleState == 3) {
            setPrice(1.5)
         }

        return () => {
            document.querySelector(".minusBtn").removeEventListener("click", clickHandler, true);
            document.querySelector(".plusBtn").removeEventListener("click", clickHandler, true);
        }
    },[]);

    /** both plus and minus use the same function, but value is set by the class of the button */
    function clickHandler(event) {
        let val = Number(document.querySelector('.quantity').value);
        if (event.target.className.match(/\bminusBtn\b/)) {
            if (val <= 1) {
                val = 1;
            } else {
                val--;



                if(val < 2 && props.saleState == 1){
                    setPrice(1)
                }else if (val < 2 && props.saleState == 2){
                    setPrice(1.25)
                }

            }
        } else if (event.target.className.match(/\bplusBtn\b/)) {
            val = val + 1;

            if(val > 1 && props.saleState == 1){
                setPrice(0.75)
            }else if (val > 1 && props.saleState == 2){
                setPrice(1)
            }

            if (props.saleState == 1 && props.ownerBalance +val >= props.ogBalance *5) {
                document.getElementById("plusButton").style.display="none"
            }else if(props.saleState == 2 && val >= props.silverBalance *5){
                document.getElementById("plusButton").style.display="none"
            }else if(props.saleState == 3 && val >= 10 ){
                document.getElementById("plusButton").style.display="none"
            }
            
        }
        document.querySelector('.quantity').value = val;
    }

    return (
        <>
            <div className={styles.mintgroup} >
                <div className={styles.btngroup}>
                    <button className={"btnMint minusBtn " + styles.btn}>-</button>
                    <input className={"quantity " + styles.quantity} min={1} defaultValue={1} readOnly="readonly" id="quantity" type="number"/>
                    <button id="plusButton" className={"btnMint plusBtn " + styles.btn}>+</button>
                </div>
                <button onClick={props.data} className="btn">Mint</button>
            </div>
            <div className={styles.mintgroup}>
                <div className={styles.btngroup}>
                    {props.total} / 6666
                </div>
                <div className={styles.price}> {price}🔺</div>
            </div>
        </>
    )
}


import { useEffect, useState } from 'react'
import './shoppingCart.css'
import { useNavigate } from 'react-router-dom'

export default function ShoppingCart(props) {

    const [btn, setBtn] = useState("flex justify-around align-center mr-5 w-12 py-1 flex-row border duration-300 cursor-pointer")

    const [colorPC, setColorPC] = useState(props.shoppingCartColor)

    const [colorCart, setColorCart] = useState("h-6 w-6 title")

    const [showWindow, setShowWindow] = useState("checkoutContainer")

    const [showWindow2, setShowWindow2] = useState("checkoutContainer3")

    const goToCheckOut = useNavigate();

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY < 200){
            setColorPC(props.shoppingCartColor) 
        } else {
            setColorPC(props.secondaryShoppingCartColor)
        }
    }    
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, true);
        return () => window.removeEventListener('scroll', onScroll); 
    }, [])

    let changeColors = () => {
        if(btn === "flex justify-around align-center mr-5 w-12 py-1 flex-row border duration-300 cursor-pointer"){
            setBtn("flex justify-around mr-5 w-20 py-1 flex-row border changebck duration-300 cursor-pointer")
            setColorPC("text-white text-xl")
            setColorCart("h-6 w-6 text-white duration-3000")
            if(props.initialValue == 0) {
                setShowWindow("checkoutContainer1 duration-300")
            } else if(props.initialValue > 0){
                if(showWindow2 == "checkoutContainer2"){
                    setShowWindow2("checkoutContainer1")
                } else {
                    setShowWindow2("checkoutContainer2")
                }
            }
        } else {
            setBtn("flex justify-around align-center mr-5 w-12 py-1 flex-row border duration-300 cursor-pointer")
            setColorPC(props.shoppingCartColor)
            setColorCart("h-6 w-6 title")
            setShowWindow("checkoutContainer duration-300")
            setShowWindow2("checkoutContainer3")
        }
    }

    
    return (
        <>
            <div>
                <div className={btn} onClick={changeColors} >
                    <svg className={colorCart}   fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                    </svg>
                    <p className={colorPC}> {props.initialValue} </p>
                </div>
            </div>
            <div className={showWindow}>
                <svg className="h-24 w-24 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                </svg>
                <h2>Your bag is empty!</h2>
            </div>
            <div className={showWindow2}>                
                        {
                        props.initialValue == 0 ?
                        <div className="containerEmpty">
                            <svg className="h-24 w-24 text-gray-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
                            </svg>
                            <h3 className="pt-5 text-xl">Your bag is empty!</h3>
                        </div>
                          :
                          <div className="flex flex-col items-center justify-start">
                             <h2>Your Order</h2>
                            {
                            props.productInfo.map(product => {
                                return(
                                    <div className="flex justify-between mt-6 productContainer">
                                            <div className="flex justify-around items-start">
                                                <div className="mt-5 mr-4 cursor-pointer" id={product.id} onClick={props.removeProductFromCheckOut}>
                                                    <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" id={product.id} stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                                                        <polyline points="3 6 5 6 21 6" id={product.id} />  
                                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" id={product.id} />  
                                                        <line x1="10" y1="11" x2="10" y2="17" id={product.id}  />  
                                                        <line x1="14" y1="11" x2="14" y2="17" id={product.id} />
                                                    </svg>
                                                </div>
                                                <img className="imageProductCheckOut" src={product.image}/>
                                                <div className="flex flex-col items-start">
                                                    <h3 className="productName">{product.name}</h3>
                                                    <div className="flex justify-start items-start ml-3">
                                                        <p>Extras:</p>
                                                        <ul className="extraList">
                                                            {
                                                                product.extras.map(product => {
                                                                    return (
                                                                        <li
                                                                            key={product.id}
                                                                            id={product.id}
                                                                        >
                                                                        {product}
                                                                        </li>
                                                                    )
                                                                })
                                                            }
                                                        </ul>
                                                    </div>
                                                </div> 
                                            </div>  
                                            <div className="flex justify-around p-4">
                                                <svg className="h-6 w-6 text-gray-400 mr-3 cursor-pointer" onClick={() => props.decreaseQuantity(product)}  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                                <p> Qty: {product.quantity}</p>
                                                <svg className="h-6 w-6 text-gray-400 ml-3 cursor-pointer" onClick={() => props.increaseQuantity(product)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                                </svg>
                                            </div>                              
                                    </div>
                                )
                            })
                            } 
                              <div className="shoppingCartBtn" onClick={() => goToCheckOut("/CheckOutPage")}>
                                <p>Checkout</p>
                              </div>
                        </div>
                      
                        }
                
            </div>
        </>
    )
}



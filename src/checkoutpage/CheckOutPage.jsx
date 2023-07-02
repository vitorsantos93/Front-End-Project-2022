import { useState } from 'react';
import './checkOutPage.css'
import { useNavigate } from 'react-router-dom';


export default function CheckOutPage(props) {

  const goToHomePage = useNavigate()

  const iconColor = "#cc5500"


  return ( 
      <div className="flex flex-col flex-wrap items-start justify-center">
        <div className="flex flex-wrap justify-center items-center p-4 w-screen">
          <svg class="h-12 w-12  cursor-pointer" onClick={() => goToHomePage("/")} fill="white"  viewBox="0 0 24 24" stroke={iconColor}>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
          </svg>
          <h1 className="titleC">Your Order</h1>
        </div> 
        <div className="w-screen flex flex-col flex-wrap items-center justify-start">
            {
              props.productInfo.map(product => {
                return(
                  <div className="w-3/5 flex flex-wrap justify-between items-center mt-12 border-none " id={`${product.id}${product.meal}`}>
                    <div className="flex justify-center items-center ml-3">
                      <div className=" mr-4 cursor-pointer" id={product.id} onClick={props.removeProductFromCheckOut}>
                        <svg className="h-6 w-6 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor" id={product.id} stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">
                          <polyline points="3 6 5 6 21 6" id={product.id} />  
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" id={product.id} />  
                          <line x1="10" y1="11" x2="10" y2="17" id={product.id}  />  
                          <line x1="14" y1="11" x2="14" y2="17" id={product.id} />
                        </svg>
                      </div>
                      <img className="imageProductCheckOut" src={product.image}/>
                      <div className="flex flex-col items-start pt-2 pb-2 ml-4">
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
                    <div className="flex justify-center items-center p-4">
                      <div className="flex justify-around p-4 mr-1">
                        <svg className="h-6 w-6 text-gray-400 mr-3 cursor-pointer"  onClick={() => props.decreaseQuantity(product)} fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        Qty: {product.quantity}
                        <svg className="h-6 w-6 text-gray-400 ml-3 cursor-pointer" onClick={() => props.increaseQuantity(product)} id={product.id} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <p className="price1">{product.price * product.quantity}€</p>   
                    </div>                          
                </div>
                )
              })
            } 
      </div>
      <div className="w-screen flex flex-wrap justify-center items-center mt-48">
          <h2 className="total">Total Purchase: <span className="euroColor">{props.total}€</span></h2> 
      </div>
    </div>
  )
}

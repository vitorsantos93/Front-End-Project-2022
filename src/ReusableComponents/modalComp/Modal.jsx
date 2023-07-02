import React, { useState } from 'react';
import './modal.css'

export default function Modal(props) {

  const removeNameWhiteSpaces = () => {
   return props.name.replace(/\s+/g, "_") // Regex
  }

  const removeNameWhiteSpaces1 = () => {
    return props.name.replace(/\s+/g, "-") // Regex
  } 

   /* let [stock, setStock] = useState(props.stock) 

    const changeStock = (product) => {
      if(stock > -1){
        setStock(stock -= 1)
      } else if(stock == -1) {
        setStock(props.stock)
      }
    }  */

  return (
    <div className={props.hide}>
        <div className="infoContainer absolute">
          <svg class="h-10 w-10 text-white absolute z-10 top-3 right-3 cursor-pointer" onClick={props.closeProduct} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
          <h1>{props.name}</h1>
          <img className="imageModal" src={props.image} />
          <p className="description">{props.description}</p>
          <h2 className="extrasTitle">Extras</h2>
          {
            props.extras.map((extra, index) =>
              <div className="checkBoxContainer">
                <input 
                  type="checkbox"
                  key={`${index}${removeNameWhiteSpaces1()}`}
                  id={`${index}${removeNameWhiteSpaces()}`} 
                  name={extra} 
                  checked={props.isChecked}
                  onChange={() => props.checkBoxOnChange}
                  onClick={(event) => props.getExtras(extra, event)}
                />
                <label className="ml-3" for={extra}>{extra}</label>
              </div>
              )
          }
          <div className="modalStock">
            <h2 className="price">Price: €{props.price}</h2>
            <p id={props.product.id}>
              Stock:
              {
                props.stock <= 10 && props.stock > 0 ? <span className="visaSign"> ✓ </span> : <span className="xSign"> x </span>
              }
            </p>
          </div>
          <div className="bagBtn" onClick={props.selectedProducts}>
              <p>Add to Bag</p> 
              <svg class="h-6 w-6 text-white pl-1"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/>
              </svg>
          </div>
        </div>
    </div>
    )
}


import React, { useState } from 'react'
import './catalogPage.css'
import Modal from '../modalComp/Modal'

export default function CatalogPage(props) {

    return (
            <div className="itemsContainer">
               {props.renderProducts}
            <ul className="paginateContainer">
                <svg class="previousBtn" onClick={props.previousBtn}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                    <circle cx="12" cy="12" r="10" />  
                    <polyline points="12 8 8 12 12 16" />  
                    <line x1="16" y1="12" x2="10.5" y2="12" />
                </svg>
                {props.renderPageNumbers}
                <svg class="nextBtn" onClick={props.nextBtn}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  
                    <circle cx="12" cy="12" r="10" />  
                    <polyline points="12 16 16 12 12 8" />  
                    <line x1="8" y1="12" x2="13.5" y2="12" />
                </svg>
            </ul>
                {
                    // passar para componente Pai
                    props.product.map(product => 
                        <Modal 
                            id={product.id}
                            name={product.name}
                            image={product.image}
                            meal={product.meal}
                            description={product.description}
                            extras={product.extras}
                            price={product.price}
                            stock={product.stock}
                            hide={props.modalFirstState}
                            closeProduct={props.closeProduct}
                            checkBoxOnChange={props.checkBoxOnChange}
                            saveUserExtras={props.saveUserExtras}
                            getExtras={props.getExtras}
                            checked={props.isChecked}
                            product={product}
                            selectedProducts={props.selectedProducts}
                        />
                    )
                }
            </div>
    )
}


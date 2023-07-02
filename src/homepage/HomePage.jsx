import { useEffect, useState } from "react"
import './homepage.css'
import Main from '../homepage/main/Main'
import MenuButton from '../ReusableComponents/menuButton/MenuButton'
import ShoppingCart from '../ReusableComponents/ShoppingCarButton/ShoppingCart'
import UserLocation from '../ReusableComponents/userLocation/UserLocation'
import StartSessionButton from '../ReusableComponents/startSessionButton/StartSessionButton'
import InputFiltrar from '../ReusableComponents/imput/InputFiltrar'
import { useNavigate } from 'react-router-dom';


export default function Header(props)  {

     const [bckColor, setBckColor] = useState("headerDiv");

     const [colorMenu, setColorMenu] = useState("h-8 w-16 text-gray-800 duration-300") 

     const [visibility, setVisibility] = useState("navBarLayout")

     const [position, setPosition] = useState("rotate-0 duration-300")

     const [secondaryColorMenu, setSecondaryColorMenu] = useState("h-8 w-16 text-white duration-300")

     const [colorPShoppingCart, setColorPShoppingCart] = useState("text-gray-700 text-xl duration-300")

     const [secondaryColorShoppingCart, setSecondaryColorShoppingCart] = useState("text-white text-xl duration-300")

    const [input] = useState("x-2 mr-0 relative hidden duration-300")
    
    
    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 200){
            setBckColor("headerDiv1")
            setColorMenu("h-8 w-16 text-white duration-300") 
            setSecondaryColorMenu("h-8 w-16 text-gray-800 duration-300")
            setColorPShoppingCart("text-white text-xl duration-300")
            setSecondaryColorShoppingCart("text-gray-700 text-xl duration-300")
        } else {
             setBckColor("headerDiv")
             setColorMenu("h-8 w-16 text-gray-800 duration-300")
             setSecondaryColorMenu("h-8 w-16 text-white duration-300")
             setColorPShoppingCart("text-gray-700 text-xl duration-300")
             setSecondaryColorShoppingCart("text-white text-xl duration-300")
        }
    }    
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, true);
        return () => window.removeEventListener('scroll', onScroll); 
    }, [])


    let changingMenu = () => {
        if(position === "rotate-0 duration-300"){
            setPosition("rotate-90 duration-300 mx-10")
            setVisibility("navBarLayout1")
        } else {
            setPosition("rotate-0 duration-300")
            setVisibility("navBarLayout")
        }
    }  

    

    return (
        <>
            <header className="HeaderContainer w-screen flex items-center justify-between headerContainer" id="homepage">
                <img className="image" src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/>
                <div className={ bckColor }>
                  <div className="menuDiv">
                        <div className=" mx-1 cursor-pointer">           
                            <MenuButton 
                                color={colorMenu} 
                                secondaryColor={secondaryColorMenu} 
                                changingMenu={changingMenu} 
                                position={position} 
                                />
                                <nav className={visibility}>
                                    <ul>
                                        <a href="#homepage" onClick={changingMenu}>                                            
                                            <li className="items" >
                                                Home 
                                            </li> 
                                        </a>
                                        <a href="#main" onClick={changingMenu}>
                                             <li className="items">
                                                Wish Menu
                                            </li> 
                                        </a>
                                    </ul>
                                </nav>
                        </div>
                        <h1 className="title"> Food Wish </h1>
                    </div> 
                <div className="flex flex-row items-center">
                        <InputFiltrar 
                            showInput={input} 
                            searchProduct={props.searchProduct}
                        />
                        <ShoppingCart 
                            shoppingCartColor={colorPShoppingCart}  
                            secondaryShoppingCartColor={secondaryColorShoppingCart}
                            initialValue={props.initialValue}
                            selectedExtra={props.selectedExtra}
                            selectedExtra={props.selectedExtra}
                            productInfo={props.productInfo}
                            removeProductFromCheckOut={props.removeProductFromCheckOut}
                            product={props.product}
                            firstWindow={props.firstWindow}
                            increaseQuantity={props. increaseQuantity}
                            decreaseQuantity={props.decreaseQuantity}
                        />
                        <StartSessionButton />
                </div>
                </div>
                <div className="absolute">
                    <UserLocation />
                </div>
            </header>
            <Main
                products={props.products}
                checked={props.isChecked}
                checkBoxOnChange={props.checkBoxOnChange}
                saveUserExtras={props.saveUserExtras}
                getExtras={props.getExtras}
                modalFirstState={props.modalFirstState}
                previousBtn={props.previousBtn}
                nextBtn ={props.nextBtn}
                renderPageNumbers={props.renderPageNumbers}
                product={props.product}
                closeProduct={props.closeProduct}
                openProduct={props.openProduct}
                currentMeals={props.currentMeals}
                renderProducts={props.renderProducts}
                product={props.product}
                selectedProducts={props.selectedProducts}
            />
        </>
    )
}


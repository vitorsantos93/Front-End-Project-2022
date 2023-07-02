import { useEffect, useState } from 'react';
import './App.css';
import "@material-tailwind/react/tailwind.css";
import HomePage from './homepage/HomePage'
import CheckOutPage from './checkoutpage/CheckOutPage'
import { BrowserRouter, Routes, Route } from "react-router-dom"

//Próximo projeto usar useContext para passagem de props!!!!!!!!!

export default function App() {
  
  const [products, setProducts] = useState([]) // products contém todos os produtos recebidos pela API

  const [filterProduct, setFilterProduct] = useState([])

  const [initialValue, setInitialValue] = useState(0)

  const [isChecked, setIsChecked] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)

  const [modalFirstState, setModaFirstlState] = useState("modalContainer1") 

  const [modalSecondState] = useState("modalContainer")

  const productsPerPage = 6

  const maxPageLimit = 3

  const minPageLimit = 1

  const [quantity, setQuantity] = useState(1)

  const changePage = (page) => { // identifica a página em que o utilizador clicou
        setCurrentPage(page.target.id)
    } 

  const previousBtn = () => {
        if(currentPage - 1 <  minPageLimit){
            setCurrentPage(minPageLimit)
        } else {
            setCurrentPage(currentPage - 1)
        }
    }

  const nextBtn = () => {
        if(currentPage + 1 > maxPageLimit){
            setCurrentPage(minPageLimit)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }

  const searchProduct = (input) => {
    let filterProducts = products.filter(product => product.name.toLowerCase().includes(input.target.value.toLowerCase()))
    setFilterProduct(filterProducts) 
  }

  const pages = []

    for(let i = 1; i <= Math.ceil(products.length / productsPerPage); ++i) {
        pages.push(i)
    }

  const indexlastProduct = currentPage * productsPerPage 

  const indexFirstProduct = indexlastProduct - productsPerPage

  const currentMeals = filterProduct.slice(indexFirstProduct, indexlastProduct)

  const [productId, setProductId] = useState(1)

  const product = currentMeals.filter((product) => product.id == productId)

  const openProduct = (product) => {
        setModaFirstlState(modalSecondState)
        setProductId(product.id)
  }

  const closeProduct = () => {
    setModaFirstlState("modalContainer1")
  }

  const renderProducts = (product) => { //renderiza todos os cards dos produtos na view
    return(
        <ul className="itemsCatalog">
                {
                    product.map((product, index) => {
                        return (
                            <li 
                            className="isolatedItems"
                            key={index}
                            id={product.id} 
                            onClick={() => openProduct(product)}
                            >
                              <h2>{product.name}</h2>
                              <img src={product.image} alt={product.name}/>
                            </li>
                        )
                    } )
                }  
            </ul>
        )
    }

    const renderPageNumbers = pages.map(number => { // renderiza o layout de mudança de página e suas animações
        if(number < maxPageLimit + 1 && number >= minPageLimit){
            return (
                <li
                className={currentPage == number ? "activePage": "disabePage"}
                key={number} 
                id={number}
                onClick={changePage}
                >
                .
                </li>
            )
        } else {
            return null
        }
    })
  
  let selectedExtra = []

  const checkBoxOnChange = () => {
   setIsChecked(!isChecked)
}

  const getExtras = (items, event) => {
    if(selectedExtra.includes(items) && (event.target.checked)){
      selectedExtra.splice(items, 1)
    } else {
       selectedExtra.push(items)
    }
  }

  const [productInfo, setProductInfo] = useState([])

  console.log(productInfo)

  const [productPrice, setProductPrice] = useState(product.price)

  const selectedProduct = (product) => {
      product.map(product => {
         setProductInfo(
           [...productInfo, {
            id: `${product.id}${initialValue}`,
            name: product.name,
            image: product.image,
            meal: product.meal,
            extras: selectedExtra,
            quantity: 1,
            price: product.price 
            }
          ]
         )
      })

      if(initialValue == 0) {
        setInitialValue(productInfo.length + 1)
      } else if (initialValue == initialValue){
        setInitialValue(productInfo.length + 1)
      }
  }

  const removeProductFromCheckOut = (item) => {
   let itemId = item.target.id
    setProductInfo(productInfo.filter(product => product.id !== itemId))
    setInitialValue(productInfo.length - 1)
  }

  const increaseQuantity = (product) => {
      setQuantity(product.quantity += 1)
  }

  const decreaseQuantity = (product) => {
    if(product.quantity > 1) {
      setQuantity(product.quantity -= 1)
    } else if(product.quantity == 1) {
      setQuantity(1)
    }
  }

  const arrPrice = []

  productInfo.map(product => arrPrice.push(product.price * product.quantity))

  function getTotal(total, num) {
    return total + num
  }

 const total = arrPrice.reduce(getTotal, 0)

  
  useEffect(() => { 
        fetch("https://61e59d49c14c7a0017124d7d.mockapi.io/api/wishCatalog")
        .then((resp) => resp.json())
        .then((data) => {
          setProducts(data)
          setFilterProduct(data)
        })        
    }, []) 
    
  return (
    <BrowserRouter>
      <Routes>
          <>
            <Route path="/" element= {
                <HomePage
                  initialValue={initialValue}
                  products={products}
                  checked={isChecked}
                  checkBoxOnChange={checkBoxOnChange}
                  getExtras={getExtras}
                  selectedExtra={selectedExtra}
                  modalFirstState={modalFirstState}
                  previousBtn={previousBtn}
                  nextBtn={nextBtn}
                  closeProduct={closeProduct}
                  renderProducts={renderProducts(currentMeals)}
                  renderPageNumbers={renderPageNumbers}
                  product={product}
                  productInfo={productInfo}
                  selectedProducts={() => selectedProduct(product)}
                  removeProductFromCheckOut={(e) => removeProductFromCheckOut(e)}  
                  searchProduct={(e) => searchProduct(e)}  
                  increaseQuantity={increaseQuantity} 
                  decreaseQuantity={decreaseQuantity}      
                />
              }
            />
            <Route path="/CheckOutPage" element={
                <CheckOutPage
                  productInfo={productInfo}
                  removeProductFromCheckOut={(e) => removeProductFromCheckOut(e)}
                  quantity={quantity}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  total={total}
                />
              } 
            />
          </>
      </Routes>
    </BrowserRouter>
  );
}


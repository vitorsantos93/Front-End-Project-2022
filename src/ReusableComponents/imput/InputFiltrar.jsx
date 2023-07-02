import { useEffect, useState } from 'react'
import './inputFiltrar.css'

export default function InputFiltrarProdutos(props) {

    const [width, setWidth] = useState("w-20 rounded-full py-1 px-1.5 duration-700 bg-transparent")

    const [rotate, setRotate] = useState("h-6 w-6 text-white absolute top-1 left-3 rotate-0")

    const [input, setInput] = useState("")

    const [inputValue, setInputValue] = useState("")

    const [showInput, setshowInput] = useState(props.showInput)

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY > 700){
            setshowInput("x-2 mr-4 relative duration-300")
        } else {
             setshowInput("x-2 mr-0 relative hidden duration-300")
        }
    }    
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, true);
        return () => window.removeEventListener('scroll', onScroll); 
    }, [])

    let increaseWidth = () => {
         if(width === "w-20 rounded-full py-1 px-1.5 duration-500 bg-transparent"){ 
            setWidth("stretch rounded-full py-1 pl-11 duration-500 placeholder")
            setRotate("h-6 w-6 text-gray-800 absolute top-1 left-3 rotate-180  duration-500")
            setTimeout(() => {
                setInput("Type your wishes...");
            }, 500);
            setInputValue(input.value)
        }  else { 
            setWidth("w-20 rounded-full py-1 px-1.5 duration-500 bg-transparent")
            setRotate("h-6 w-6 text-white absolute top-1 left-3 rotate-0 duration-500")
            setTimeout(() => {
                setInput("");
            }, 10)
            setInputValue("")
        } 
    }

    return (
        <div className={showInput}> 
            <div className="cursor-pointer">
                <svg className="h-6 w-6 title absolute top-1 right-3"  width="24" height="19" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="10" cy="10" r="7" />  <line x1="21" y1="21" x2="15" y2="15" /></svg>
            </div>
            <div className="cursor-pointer">
                <svg className={rotate} onClick={increaseWidth} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="15 6 9 12 15 18" /></svg>
            </div>
            <form>
                <label>
                    <input className={width}  type="text" placeholder={input}  value={inputValue} onChange={props.searchProduct} />
                </label>
            </form>
        </div>
    )
}

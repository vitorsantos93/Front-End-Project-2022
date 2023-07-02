import { useEffect, useState } from 'react'

export default function MenuButton(props)  {

    const [colorP, setColorP] = useState(props.color) 
   // porquê estar da dar só no segundo clique

    useEffect(() => {
        const onScroll = () =>{
            if(window.scrollY < 200){
            setColorP(props.color) 
        } else {
            setColorP(props.secondaryColor)
        }
    }    
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, true);
        return () => window.removeEventListener('scroll', onScroll); 
    }, [])

    return (
        <>
            <div 
                className={props.position} 
                onClick={props.changingMenu}
            >
                <svg className={colorP} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" 
                stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  
                    <path stroke="none" className="transition duration-150 ease-out hover:ease-in" d="M0 0h24v24H0z"/>  
                    <line x1="4" y1="6" x2="20" y2="6" />  
                    <line x1="4" y1="12" x2="20" y2="12" />  
                    <line x1="4" y1="18" x2="20" y2="18" />
                </svg>    
            </div>
        </>
    )
}



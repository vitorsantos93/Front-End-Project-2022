import { useState } from 'react'
import './startSessionButton.css'

export default function StartSessionButton(props) {

    const [width, setWidth] = useState("startSessionButton duration-300")

    const [appear, setAppear] = useState("hidden")

    let changeButton = () => {
        if(width === "startSessionButton duration-300"){
            setWidth("startSessionButton1 duration-300")
            setAppear("userDataWindow")
        } else {
            setWidth("startSessionButton duration-300")
            setAppear("hidden")
        }
    }

    const [userFirstName, setUserFirstName] = useState("")

    const [userSecondName, setUserSecondName] = useState("")

    const [userEmail, setUserEmail] = useState("")

    const [userTel, setUserTel] = useState("")

    const firstName = (event) => {
        setUserFirstName(event.target.value)
    }

    const secondName = (event) => {
        setUserSecondName(event.target.value)
    }

    const email = (event) => {
        setUserEmail(event.target.value)
    }

    const tel = (event) => {
        setUserTel(event.target.value)
    }


    const userData = {
        firstName: userFirstName, 
        secondName: userSecondName,
        email: userEmail,
        tel: userTel
    }
    
    const gettingDataToSessionStorage = () => {
        sessionStorage.setItem('user', JSON.stringify(userData))
    }
    

    return (
        <>
            <div className={width} onClick={changeButton}>
                <p>Sign Up</p>
            </div>
            <div className={appear}>
                <h2 className="mb-12 text-4xl titleSignUp">Sign Up</h2>
                <form className="flex flex-col">
                    <input className="inputUserData" type="text"  placeholder="First Name" onChange={firstName} />
                    <input className="inputUserData" type="text"  placeholder="Last Name" onChange={secondName} />
                    <input className="inputUserData" type="email" placeholder="Email" onChange={email} />
                    <input className="inputUserData" type="tel" placeholder="Tel" onChange={tel} />
                    <input className="inputUserData" type="password" placeholder="Password"/>
                </form>
            <div className="flex flex-col mb-8">
                <p className="titleSignUp mb-4 flex justify-center">Or</p>
                <div className="flex flex-row justify-center items-center">
                <svg className="h-10 w-10 iconColor cursor-pointer mr-6"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <svg className="h-10 w-10 iconColor cursor-pointer mr-7"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                <svg className="h-10 w-10 iconColor cursor-pointer"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>
                </div>
            </div>
            <div className="submitButton" onClick={gettingDataToSessionStorage}>
                <p>Done!</p>
            </div>
            </div>
        </>
    )
}


import React from 'react'
import './userLocation.css'

export default function userLocation() {


    return (
        <>
            <div className="userLocationContainer">
                <h2 className="mb-10 text-5xl text-center">We deliver your wishes anytime, anywhere</h2>
                <form>
                    <input className="inputUserLocation" type="text" placeholder="Type your address here..." />
                </form>
                <div className="addressButton">
                    <a>
                        <svg class="h-5 w-5 text-white"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />  <line x1="4" y1="22" x2="4" y2="15" /></svg>
                    </a>                 
                </div>
            </div>
            
        </>
    )
}

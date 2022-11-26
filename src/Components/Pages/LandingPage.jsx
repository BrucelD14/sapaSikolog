import React from 'react'
import Navbar from '../Navbar'
import home from "./home.svg"
import "./Landing.css"

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Navbar/>
            <div className="flex lg:flex-row mt-20 gap-20 items-center md : flex-col">
                <div className='basis-auto ml-10 mr-10'>
                    <h1 className='text-4xl font-extrabold text-base'>Sapasikolog</h1><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente iure autem temporibus, eos delectus dignissimos, doloremque minus ad qui voluptatum nam beatae facere fugit id neque. Porro quis eius consectetur?</p>
                </div>
                
                <div className='basis-auto object-center ml-10 mr-10'>
                    <img src={home} alt="Image Not Found"/>
                </div>
            </div>
    </div>
  )
}

export default LandingPage
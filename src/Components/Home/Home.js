import React from 'react'
import dice from '../../Assets/dice.png'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className='container'>
        <div className="dice-image">
            <img src={dice} alt="" />
        </div>

        <div className="text">
          <h1>DICE GAME</h1>
         <Link to='play'><Button className="btn" text="Play Game"/></Link>
        </div>
    </div>
  )
}

export default Home
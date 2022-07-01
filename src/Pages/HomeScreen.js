import React from 'react'
import {Link} from 'react-router-dom'

const HomeScreen = () => {
  return (
    <div className='userSelectionScreen'>

<nav className='userSelectionScreen-username'>
    <i class="fa-solid fa-user"></i><span>Logged In</span>
        
    </nav>
        <main className='userSelectionScreen-navigations'>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/dietplan'>DietPlan</Link>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/ideas'>Ideas</Link>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/nutrition-details'>Nutrition Details</Link>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/recipes'>Recipes</Link>
        <Link className='userSelectionScreen-navigations-navigation-links' to='/video'>Videos</Link>
    </main>

    </div>
  )
}

export default HomeScreen
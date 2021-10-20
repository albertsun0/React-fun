import React, {useState} from 'react'
import {ReactComponent as Light} from '../assets/sun.svg';
import {ReactComponent as Dark} from '../assets/moon.svg'

const Navbar = () => {

    const [theme, toggleTheme]  = useState(true)

    const changetheme = () => {
        toggleTheme(!theme)
        console.log(theme)
    }

    return (
        <div class="w-screen flex justify-between bg-gray-200 p-4 filter drop-shadow-s ">
            
            <p class="text-2xl mr-4 font-semibold">Test</p>
            <div class= "float-right" onClick = {changetheme}>
                {theme ?  <Light class = "float-right" /> : <Dark class = "float-right" />}
            </div>
           
            
        </div>
    )
}

export default Navbar;
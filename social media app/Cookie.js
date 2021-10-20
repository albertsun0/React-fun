import React, {useState, useEffect} from 'react'

const Cookie = () => {
    const [clicks , setClicks] = useState(0);
    

    const click = () => {
        setClicks(clicks+1);
        console.log(clicks);
    }
    

    return (
        <div class="">
            {clicks}
            <button onClick = {click} class= "bg-blue-600 text-white p-2">{clicks}</button>
        </div>
    )
}

export default Cookie

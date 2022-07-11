import React from 'react'
import {Link} from 'react-router-dom'
import { Oval } from "react-loader-spinner";
const Error = () => {
  return (
    <div>

<div className="loader-center" style={{marginTop : '0rem'}}>
        <Oval
          height="150"
          width="190"
          ariaLabel="loading"
          color="#fa7d19 
          "
        />

      </div>
         <h1>Your path was not found by our intelligent router....</h1>
         
         <nav>
        <Link to="/" >
         GO BACK <i className="fa-solid fa-chevron-left"></i>
        </Link>
      </nav>
    </div>
   
  )
}

export default Error
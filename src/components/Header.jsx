import React from 'react'
import { FaSearch , FaRegHeart} from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";

function Header() {
  return (
   <>

    <div className="header">
        <div className="main">
            <div className="logo">
                <img src="https://cdn.vectorstock.com/i/500p/63/85/set-of-coffee-symbols-icons-and-signs-vector-1306385.jpg"className='image'/>
                <h3>Aroma</h3>
            </div>
            <div className="menu">
              <a>Home</a>
              <a>Contact </a>
              <a>About</a>
                <div className="icons"><span><FaSearch /> </span><span><IoMdContact /> </span><span><FaRegHeart /></span><span><TfiShoppingCart /></span> </div>
               
            </div>
        </div>
    </div>
   </>
  )
}

export default Header


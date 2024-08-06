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
                <img src='https://t3.ftcdn.net/jpg/03/47/94/96/360_F_347949696_pVuArOGNDWsZsbs4hrgSDtMmrPVopaQU.jpg'className='image'/>
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


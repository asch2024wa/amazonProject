import React from 'react'
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { BiCart } from "react-icons/bi";
import classes from "./Header.module.css"
import LowerHeader from './LowerHeader';
import Amazonlogo from ".././Carousel/images/amazon.png"
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
     
    <section className={classes.header_container}> 
    
        <div className={classes.logo_container}> 
        
          {/* {amazonlogo} */}
        
           <Link to="/" ><img src={Amazonlogo} alt="amazon logo"/></Link>
            {/* delivery */}
            
            <div className={classes.delivery}>
                <span>
              <SlLocationPin />
            </span>
               <div>
               <p>Delivered to</p>
              <span>
                Ethiopia
              </span>

               </div>
              
            </div>

        </div>


         <div className={classes.search}> 
        
            <select name="" id="">
                <option value="">All</option>
            </select>
            <input type="text" placeholder='search product'/>
               {<FaSearch size={25} />}
        </div>
        {/* right side link */}
        
          
         <div className={classes.order_container}> 
        
            <Link to="/" className={classes.language}>
           <img src="https://s.yimg.com/fz/api/res/1.2/qbJ8HrUw55B2wYLrbHp4wA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI2MDtxPTgwO3c9MzMy/https://s.yimg.com/zb/imgv1/c1353091-7a99-3eeb-8652-ab49a2c7c46e/t_500x300" alt="" />
           <select name="" id="">
            <option value="">EN</option>
           </select>
            </Link> 
           {/* three  componenets */}
           <Link to="/Auth">
             <div>
                <p>Sign In</p>
                <span>Accounts & Lists

                </span>
             </div>

           </Link>
           <Link to="/Orders">
            <p>return</p>
            <span> &orders</span>
           </Link>
           <Link to="/Cart" className={classes.cart}>
            <span>0</span>
            <BiCart  size={25}/>

           </Link>
           
        </div>

    </section>
    <LowerHeader/>
      
    </>
  )
}

export default Header

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const CartBtn = () => {
    //We get a state of addItems
    //Write the name of the file not the function
    const state = useSelector((state) => state.ADDITEM)
  return (

    <>
     <NavLink to ="/cart" className="btn btn-outline-primary ms-2">
      <span className="fa fa-shopping-cart me-1">Cart ({state.length})</span>
     </NavLink>
    </>
  )
}

export default CartBtn

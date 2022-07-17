import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { DELITEM } from '../redux/action/index'
import handleCart from '../redux/reducer/handleCart'

const Cart = () => {
   const state = useSelector ((state) => state.ADDITEM) 
   const dispatch = useDispatch()

   const handleClose = (product) =>{
      dispatch(DELITEM(product))
   }
  
   const product = (product) =>{
    return (
      <div className='px-4 my-5 bg-light rounded-3' key={product.id}>
        <div className="container py-4">
          <button onClick={()=>handleClose(product)}  className="btn-close float-end" aria-label="Close"></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img src={product.img} alt={product.title} height= "200px " width="180px" />
            </div>
          <div className="col-md-4">
            <h3>
              {product.title}
            </h3>
            <p className='lead fw-bold'>${product.qty} X ${product.price }= ${product.qty * product.price} </p>
            <button className="btn  btn-outline-dark me-4" onClick={()=>handleClose(product)}><i className='fa fa-minus'></i></button>
            <button className="btn  btn-outline-dark me-4" onClick={()=>handleClose(product)}><i className='fa fa-plus'></i></button>
          </div>
          </div>
        </div>
      </div>
    )
   }
   const emptyCart = () => {
    return(
      <div className='px-4 my-5 bg-light rounded-3 py-4'>
        <div className="container py-4" >
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>

      </div>
    )
   }
   const button = () =>{
    return (
      <div className="container">
        <div className="row">
          <NavLink to ="/checkout" className="btn btn-outline-primary mb-5 w-25 mx-auto">Proceed to checkout</NavLink>
        </div>
      </div>
    )
   }
  return (
    <>
    {state.length === 0 && emptyCart()}
    {state.length !== 0 && state.map(product)}
    {state.length !== 0 && button()}
      
    </>
  )
}

export default Cart


import React from "react"

const Modal = ({modal,setModal,res,basketProducts,setBasketProducts}) => {

// let arr = localStorage.getItem("product") ? JSON.parse(localStorage.getItem("product")) : []
const addIfNotExist = (product,arr) => {
   const res = arr.filter(el => 
   el.id === product.id
   )
   if(res[0]){
     return [...arr]
   }else{
      return [...arr,product]
   }
   }
const handleClick = (e) => {
e.preventDefault()
localStorage.setItem("product" , JSON.stringify(addIfNotExist(res[0],basketProducts)))
setBasketProducts (addIfNotExist(res[0],basketProducts)
)
}




const modalClose = () => {
    setModal(false)
       }
   
  return modal?(
 
    res.map((el) => (
        
 <div className='modal' hidden = {!modal}  >
    <p>{el.title}</p>
    <div className= "modal__img">
    <img src = {el.image}/>
    </div>
    <p>{el.price} $</p>
    <p>{el.description}</p>
    <button    onClick={handleClick} className="modal__cart__btn">Add to cart</button>
 
    <button className="modal__like__btn">like</button>
    <p className="modal__close" onClick= {modalClose} >X</p>
 </div>
    ))


  ):<div></div>
}

export default Modal


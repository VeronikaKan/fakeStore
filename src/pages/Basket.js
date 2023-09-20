import React, { useEffect, useState } from 'react'

const Basket = ({ basketProducts, setBasketProducts }) => {
  // const [cartItems,setCartItems] = useState ([])
  const [totalPrice, setTotalPrice] = useState(basketProducts.reduce((acc, rec) => { return (acc.count * acc.price) + (rec.count * rec.price) }), 0)
  //   const[count,setCount] = useState(localStorage.getItem("product")?.length || 0)
  //   const handleClick = () => {
  // setCount(count - 1)
  //   }
  // const handleClick = (e) => {
  // e.preventDefault()
  // localStorage.setItem("product" , JSON.stringify(addIfNotExist(res[0],basketProducts)))
  // setBasketProducts (addIfNotExist(res[0],basketProducts)
  // )
  // }
  // useEffect(()=>{
  // setCartItems(JSON.parse(localStorage.getItem("product")))
  // },[])
// const removeProduct = (e) => {
// basketProducts.map((el) =>localStorage.removeItem( el ))
// }
// const cartClose = () => {
// localStorage.clear()
// }
  const handleDec = (e) => {
    setBasketProducts(basketProducts.map(el => {
      if (e.target.id == el.id) {
        el.count = el.count <= 0 ? 0 : el.count - 1
      }
      return el
    }))
    setTotalPrice(basketProducts.reduce((acc, rec) => { return (acc.count * acc.price) + (rec.count * rec.price) }), 0)
  }

  const handleAdd = (e) => {
    setBasketProducts(basketProducts.map((el) => {
      if (e.target.id == el.id) {
        el.count = el.count + 1
      }
      return el
    }))
    setTotalPrice(basketProducts.reduce((acc, rec) => { return (acc.count * acc.price) + (rec.count * rec.price) }), 0)

  }
  
  return (
    <>
     <div className='container' >
          <h1 className='basket__title'>Cart</h1>
      {basketProducts.map((el) => (
          <div className='cart'>
            <p className='cart__title'>{el.title}</p>
            <div className='basket__img'>
              <img src={el.image} />
            </div>
            <div className='basket__count'>
              <button className='basket__button' onClick={handleAdd} id={el.id}>ᐱ</button>
              <p>{el.count}</p>
              <button className='basket__button' onClick={handleDec} id={el.id} >ᐯ</button>


            </div>
            <p>{el.count * el.price}</p>
         <button >ZZZZ</button>
          </div>

     
      ))}
         <button >X</button>
         </div>
      <p>{totalPrice}</p>
    </>
  )
}

export default Basket
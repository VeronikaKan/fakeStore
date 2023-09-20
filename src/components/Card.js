

const Card = ({ product, i ,modalOpen,setModalEl}) => {
    const handleCardBtn= () => {
        modalOpen()
      setModalEl(product.id)
    }
  
    return (

        <div key={i} className='content__card'>
          
            <p className='content__title' key = {product.id}>{product.title} </p>
            <p>
                {product.price}$
            </p>
            <div className='content__img'>
                <img src={product.image} />
            </div>
            <button className='card__btn' onClick= {handleCardBtn} >
                Click me
            </button>

        </div>

    )
}

export default Card
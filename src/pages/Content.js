import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from '../components/Card'
import Modal from '../components/Modal'
import Paginate from '../components/Paginate'
const newCategories = {
  electronics: 'Электроника',
  jewelery: 'Украшения',
  ['men\'s clothing']: 'Мужская одежда',
  ['women\'s clothing']: 'Женская одежда',
  all: 'Все товары'
}

const Content = ({basketProducts,setBasketProducts}) => {
  const [modal, setModal] = useState(false)
  const [modalEl,setModalEl] = useState(0)
  
  const [categories, setCategories] = useState(['all'])
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [product, setProducts] = useState([])

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios('https://fakestoreapi.com/products/categories')
      setCategories(['all', ...data]);
    }
    getCategories()
  }, [])

  useEffect(() => {
    const getCategoriesValue = async () => {
      // let { data } = await axios(`https://fakestoreapi.com/products/${selectedCategory === 'all' ? '' : `/category/${selectedCategory}`}`)
     
      const { data } = await axios(`https://fakestoreapi.com/products/${selectedCategory === 'all' ? '' : `/category/${selectedCategory}`}`)
      const elements = data.map(product => 
       product = {...product, count:1});
      setProducts(elements);
    }
    getCategoriesValue()
  }, [selectedCategory])


  const modalOpen = () => {
    setModal(true)

}
    
let res = product.filter((el) => (
el.id === modalEl
))
//пагинация
const [currentPage,setCurrentPage] = useState(1)
const [perPage,setPerPage] = useState(4)
const lastIndex = perPage * currentPage
const firstIndex = lastIndex - perPage
 const currentCards = product.slice(firstIndex, lastIndex)
 const paginate = pageNumber => setCurrentPage(pageNumber)


 const handlePerPage =(e) => {
setPerPage(e.target.value)
setCurrentPage(1)
 }
 const handleNextPage = () => {
  setCurrentPage(prev=>prev+1)
 }
 const handlePrevPage = () => {
  setCurrentPage(prev=>prev -1)
 }
  return ( 


    <>
      <div className='container'>
        
     
        <ul  className='header__list'>
          {categories.map((el, index) => (
         
            <li className={el === selectedCategory ? 'border' : ""} onClick={() => setSelectedCategory(el)} key={index}>{newCategories[el]}</li>
          ))}

        </ul>

        <p className='count'> Количество товаров: {product.length}</p>
        <div className='content__wrapper'>
          {
            currentCards.map((el, i) => (
             <Card product = {el} i = {i} modalOpen={modalOpen} setModalEl = {setModalEl} />
            ))
          }
        </div>
        
       
        <Modal modalOpen = {modalOpen} modal = {modal} setModal = {setModal} modalEl ={modalEl} res = {res} basketProducts = {basketProducts} setBasketProducts = {setBasketProducts} />
        <select value = {perPage} onChange={handlePerPage} > 
<option value="4">4</option>
<option value="10">10</option>
<option value="20">20</option>

        </select>
        <Paginate perPage= {perPage} totalCard = {product.length} paginate = {paginate} handleNextPage = {handleNextPage} handlePrevPage={handlePrevPage} setCurrentPage={setCurrentPage} currentPage = {currentPage}/>
      </div>
    </>
  )
}
export default Content
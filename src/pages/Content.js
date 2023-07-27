import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Content = () => {
 
  const [categories, setCategories] = useState([])
  const [value, setValue] = useState('jewelery')
  const [category, setCategory] = useState([])
  useEffect(() => {
    const getCategories = async () => {
      let { data } = await axios('https://fakestoreapi.com/products/categories')
      setCategories(data)

    }
    getCategories()
  }, [])
  // let newCategories = [
  //   {
  //     title: "электроника",
  //     value: "electronics"
  //   },
  //   {
  //     title: "Украшения",
  //     value: "jewelery"
  //   },
  //   {
  //     title: "мужская одежда",
  //     value: "men's clothing"
  //   },
  //   {
  //     title: "женская оддежда",
  //     value: "women's clothing"
  //   }
  // ]

  const getTitle = (key) => {
    let title
    switch (key) {
      case 'electronics':
        title = 'электроника'
        break;
      case "jewelery":
        title = "Украшения"
        break;
      case "men's clothing":
        title = "мужская одежда"
        break;
      case "women's clothing":
        title = "женская одежда"
        break;
      default: title = 'одежда'
        break
    }
    return title
  }

  useEffect(() => {
    const getCategoriesValue = async () => {
      console.log(!value ? '' : `/category/${value}`);
      let { data } = await axios(`https://fakestoreapi.com/products/${!value ? '' : `/category/${value}`}`)
      // let {data} = await axios (`https://fakestoreapi.com/products/category/${value}`)
      setCategory(data);
    }
    getCategoriesValue()
  }, [value])
  const selectCategory = (e) => {
    console.log(e);
    categories.map((el) => {
      if (el === e.target.className) {
        setValue(e.target.className)
      }
    })
  }

  const handleInput = (e) => {
    setValue(e.target.value)
  }

  return (

    // <div>
    //   <ul  value = {value} onChange={selectCategory}>
    //     {categories.map((el,i) => (
    //   <li key={i}  ></li>))}
    //   </ul>
    //   {/* <input type='text' onInput={handleInput}/> */}
    //   {
    //     category.map((el) => (
    //       <p>{el.title}</p>
    //     ))
    //   }


    // </div>

    <>
<div className='container'>
      <ul >
        {categories.map((el, index) => (
          <li className={el === value? 'border': el} onClick={selectCategory} key={index}>{getTitle(el)}</li>
        ))}
      </ul>
      {
        category.map((el) => (
          <p className='content__title' key={el.id}>{el.title}</p>
        ))
      }
      </div>
    </>
  )
}
export default Content
import { logDOM } from '@testing-library/react'
import React from 'react'
import { useState } from 'react'

const About = ({info}) => {
  const [modal,setModal] = useState(false)
  const [modalEl, setModalEl] = useState({})
  const modalOpen = (el) => {
    if( el.id=== modalEl.id){
      setModal(!modal)
    } else if (!modal){
   setModal(!modal)
    setModalEl(el)
    } else {
      setModalEl(el)
    }
  }
  return (
    <div> 
      <div>
        {
      info.map((el) => (
        <p onClick={() =>modalOpen(el)} key={el.id}>
          {el.price}
        </p>
      ))
    }</div>
    <div hidden={!modal} className='modal'>{modalEl.title}</div>
    </div>
  )
}

export default About
import React from 'react'

const Button = ({title,changePost}) => {
  return (
    <div>
         <button className= "main__btn" onClick={changePost}>{title}</button>
    </div>
  )
}

export default Button
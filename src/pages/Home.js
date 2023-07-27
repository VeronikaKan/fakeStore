import React from 'react'

const Home = ({info}) => {
  return (
    <div>  {
      info.map((el) => (
        <p>
          {el.description}
        </p>
      ))
    }</div>
  )
}

export default Home
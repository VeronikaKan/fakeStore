import React from 'react'

const Contacts = ({ info }) => {
  return (
    <div>
      {
        info.map((el) => (
          <p>
            {el.title}
          </p>
        ))
      }
    </div>
  )
}

export default Contacts
import React, { useState } from 'react'

const Paginate = ({ perPage, totalCard,paginate,handleNextPage,handlePrevPage ,currentPage,setCurrentPage}) => {
    const [activePaginate, setActivePaginate] = useState(1)
    const pageNumber = []
    console.log(currentPage);
    const total = totalCard / perPage > currentPage
    for (let i = 1; i <= Math.ceil(totalCard / perPage); i++) {
        pageNumber.push(i)
    }
    return (
        <div className='paginate' >
      
            <ul className="paginate__list">
            {currentPage > 1 ? <button className='paginate__btn' onClick={handlePrevPage}> ◄ </button> : null}
                {
                    pageNumber.map(number => (
                        <li onClick={() => setCurrentPage(number)} className={currentPage === number ? "active__paginate" : "pagination__number"} key={number}>
                            <a href='#' className='pagination__link' onClick={() => paginate(number)}>{number}</a>
                        </li>
                    ))
                }
               { total?<button className='paginate__btn' onClick={handleNextPage}>	► </button> : null}
            </ul>
           
        </div>
    )
}

export default Paginate
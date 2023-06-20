import React from "react";
import style from "./PagingModule.css"

const Paging = ({ pokemonPerPage, activeList, currentPage, paging }) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(activeList / pokemonPerPage); i++) {
        pageNumbers.push(i)
    }


/*     if(pageNumbers.length<=1){
        currentPage = 1
      } */

    const goToPreviousPage = () => {
        if (currentPage > 1) {
          paging(currentPage - 1);
        }
      };

      const goToNextPage = () => {
        if (currentPage < pageNumbers.length) {
          paging(currentPage + 1);
        }
      };




    return (
        <nav className="paging-container">
            <ul className="paging-list">
            <li>
          <button
            className="paging-button"
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            {"<<<"}
          </button>
        </li>
            { pageNumbers.map((number )=> (
                 <li key={number}>
                 <button className={`paging-button ${currentPage === number ? 'active' : ''}`}                   
                   onClick={() => paging(number)}> {number} </button>
               </li>  ))}
               <li>
          <button
            className="paging-button"
            onClick={goToNextPage}
            disabled={currentPage === pageNumbers.length}
          >
            {">>>"}
          </button>
        </li>
                
            </ul>
        </nav>
    )
}

export default Paging;

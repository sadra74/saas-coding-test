import React from "react";

export function PaginationComponent({numberOfPages, currentPageNumber, setCurrentPageCallBack}) {
    const pageNumbers = [...Array(numberOfPages + 1).keys()].slice(1)
    const nextPage = () => {
        if (currentPageNumber !== numberOfPages) setCurrentPageCallBack(currentPageNumber + 1)
    }
    const prevPage = () => {
        if (currentPageNumber !== 1) setCurrentPageCallBack(currentPageNumber - 1)
    }
    return (
        <nav>
            <ul className="pagination">
                <li>
                    <a
                        onClick={prevPage}
                        href='#'>
                        Previous
                    </a>
                </li>
                {pageNumbers.map(pgNumber => (
                    <li key={pgNumber}
                        className={`${currentPageNumber === pgNumber ? 'active' : ''} `}>

                        <a onClick={() => setCurrentPageCallBack(pgNumber)}
                           href='#'>

                            {pgNumber}
                        </a>
                    </li>
                ))}
                <li>
                    <a
                        onClick={nextPage}
                        href='#'>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}
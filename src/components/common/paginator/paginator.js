import s from "./paginator.module.css"
import React, {useState} from "react";

const Paginator = (props) => {
    const totalItemsCount = props.totalUsersCount
    let pagesCount = Math.ceil(totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    console.log(pages);
    let portionSize = 20;
    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = (portionNumber * portionSize)

    const onTransitionToOnePage = () => {
       setPortionNumber(1)
    }

    const onTransitionToLastPage = (portionCount) => {
        setPortionNumber(portionCount)

    }
    return (
        <div className={s.pageNumber}>
            <button onClick={onTransitionToOnePage}>...1</button>
            {portionNumber > 1 &&
            <button className={s.pageNumberButtonPrevBtn}
                    onClick={() => setPortionNumber(portionNumber - 1)}>PREV</button>}
            {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
                .map(el =>
                    <span key={el} className={props.currentPage === el ? s.selectedPage : ""}
                          onClick={(e) => {
                              props.onPageChanged(el);
                          }}>{el}
                    </span>)}
            {portionCount > portionNumber &&
            <button align="right" className={s.pageNumberButtonNextBtn}
                    onClick={() => setPortionNumber(portionNumber + 1)}>NEXT</button>}
            <button onClick={()=>onTransitionToLastPage(portionCount)}>...{pagesCount}</button>
        </div>
    )
}
export default Paginator;
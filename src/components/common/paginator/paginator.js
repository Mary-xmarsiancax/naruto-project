import s from "./paginator.module.css"
import React, {useState} from "react";

const Paginator = (props) => {
    const totalItemsCount = props.totalUsersCount
    let pagesCount = Math.ceil(totalItemsCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
     let portionSize = 20;
     let portionCount = Math.ceil(pagesCount / portionSize)
    let[portionNumber,setPortionNumber]=useState(1)
     let leftPortionPageNumber=(portionNumber-1)*portionSize+1;
     let rightPortionPageNumber=(portionNumber*portionSize)
    return (
        <div className={s.pageNumber}>
            {portionNumber>1&&  <button className={s.pageNumberButtonPrev} onClick={()=>setPortionNumber(portionNumber-1)}>PREV</button>}
            {pages.filter(el => el >= leftPortionPageNumber && el <= rightPortionPageNumber)
            .map(el =>
                <span key={el} className={props.currentPage === el ? s.selectedPage : ""}
                      onClick={(e) => {
                          props.onPageChanged(el);
                      }}>{el}
                    </span>)}
            {portionCount>portionNumber&& <button align="right" className={s.pageNumberButtonNext} onClick={()=>setPortionNumber(portionNumber+1)}>NEXT</button>}
        </div>
    )
}
export default Paginator;
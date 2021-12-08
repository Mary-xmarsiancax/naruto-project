import s from "./paginator.module.css"
import React from "react";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
            <div className={s.pageNumber}>
                {pages.map(el =>
                    <span key={el} className={props.currentPage === el && s.selectedPage } onClick={(e) => {
                        props.onPageChanged(el);
                    }}>{el}
                    </span>)}
            </div>
    )
}
export default Paginator;
import React from 'react';
import {getPages} from "../../utils/page";

const Pagination = ({totalPages, page, getMorePosts }) => {
    let pagesArray = getPages(totalPages);
    return (
        <div className="page__wrapper">
            {pagesArray.map((p) =>
                <span
                    key={p}
                    onClick={() => getMorePosts(p)}
                    className={page === p ? "page page__active" : "page"}
                 >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;
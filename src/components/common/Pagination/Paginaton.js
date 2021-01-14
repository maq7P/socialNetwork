import IdRandom from "../../../utilities/IdRandom";
import React from "react";
import style from './Paginatiom.module.css'

const Pagination = ({totalUsers, showUsers, page, onPageChanged}) => {
    let pageCount = Math.ceil(totalUsers / showUsers);
    pageCount = pageCount > 30 ? 30 : pageCount;
    let pagination = []
    for (let i = 1; i <= pageCount; i++) {
        pagination = [...pagination, i];
    }
    return <div>
        {pagination.map(point => (
            <span
                key={IdRandom(6)}
                className={`${style.point} ${page === point && style.pointActive}`}
                onClick={() => onPageChanged(point)}

            >{point}</span>
        ))}
    </div>
}
export default Pagination

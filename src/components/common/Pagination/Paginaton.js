import IdRandom from "../../../utilities/IdRandom";
import React from "react";
import style from './Paginatiom.module.css'

const Pagination = ({totalItems=10, showItems=10, page=1, onPageChanged}) => {
    const pageCount = Math.ceil(totalItems / showItems);
    const portion = 10
    const [startIndex, setStartIndex] = React.useState(1)

    console.log(pageCount, 'pageCount')
    const firstPortionIndex = (startIndex-1) * portion + 1
    const lastPortionIndex = portion * startIndex

    let pagination = []
    for (let i = firstPortionIndex; i <= lastPortionIndex; i++) {
        if(i > pageCount) break
        pagination = [...pagination, i];
    }
    return <div className={style.pagination}>
        <button className={style.btn}
            onClick={() => {
                if(startIndex > 1){
                    setStartIndex(startIndex - 1)
                }
            }}
        >Prev</button>
        {pagination.map(point => (
            <span
                key={IdRandom(6)}
                className={`${style.point} ${page === point && style.pointActive}`}
                onClick={() => onPageChanged(point)}
            >{point}
            </span>
        ))}
        <button className={style.btn}
            onClick={() => {
                if(startIndex < pageCount){
                    setStartIndex(startIndex + 1)
                }
            }}
        >Next</button>
    </div>
}
export default Pagination

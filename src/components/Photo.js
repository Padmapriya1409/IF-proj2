import React, { useState } from "react";
import Data from "./Data";


function Photo() {

const[unsplahData,setUnsplashData]=useState(Data)
const [filterStore, setFilterStore] = useState([]);
const [show, setShow] = useState(false);

const displayCat = setUnsplashData.map((data) => {
    return data.category
})

const newArr = [...new Set(displayCat)]

const handleFill = (catlog) => {
    setShow(true)
    const filterData = setUnsplashData.filter((data) => data.category === catlog)
    setFilterStore(filterData)
}

  return (
    <div>
         {newArr.map((data) => {
                return(
                    <span key={data} onClick={()=> handleFill(data)} style={{fontSize:"30px"}}>{data+" !*! "}</span>
                )
            })}
            { show ?
            <div>
                {filterStore.map((data) => {
                return(
                        <div key={data.id}>
                            <img width="200px" height="200px" src={data.url} alt="no" />
                        </div>
                    )
                })}
            </div>
            :
            <div>
                 {unsplashData.map((data) => {
                    return(
                        <div key={data.id}>
                            <img width="200px" height="200px" src={data.url} alt="no" />
                        </div>
                    )
                  })}
    </div>}</div>)}
 
export default Photo
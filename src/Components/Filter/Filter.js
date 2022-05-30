import React from 'react'
import { Rating } from 'react-simple-star-rating'

const Filter = ({setsearch,rate,rates}) => {
  return (
    <div><input type="text" placeholder="search" onChange={(e)=>setsearch(e.target.value)}/>
    <Rating onClick={rate} rates={rates}/>
    </div>
  )
}

export default Filter
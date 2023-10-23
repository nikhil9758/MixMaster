import React from 'react'
import Cards from './Cards'
import './Cards.css'
const CocktailList = ({drinks}) => {
  return (
    <div style={{display: 'grid',gridTemplateColumns: '1fr 1fr 1fr',padding: '8rem',
    gap: '2rem'}}>
        {
            drinks?.map((item)=>{
                return<Cards {...item} key={item.id}/>
            })
        }
    </div>
  )
}

export default CocktailList
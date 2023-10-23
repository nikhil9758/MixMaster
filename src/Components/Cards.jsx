import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const Cards = ({name,image,id,info,glass}) => {
  return (
    <div>
        <div className='card__container'>
            <img src={image} alt='drink'/>
            <div className='card__details'>
                <b>{name}</b><br/>
                {info}<br/>
                {glass}<br/>
                <Link to={`/cocktail/${id}`.toString()}>Details</Link>
            </div>
        </div>
    </div>
    
  )
}

export default Cards
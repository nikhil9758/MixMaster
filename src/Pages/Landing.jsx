import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SearchForm from '../Components/SearchForm'
import CocktailList from '../Components/CocktailList'

const data=[{
    id:1,
    image:'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    name:'GG',
    info:'Collins Glass',
    glass:'Optional Glass'
},
{
    id:2,
    image:'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    name:'GG',
    info:'Collins Glass',
    glass:'Optional Glass'
},
{
    id:3,
    image:'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    name:'GG',
    info:'Collins Glass',
    glass:'Optional Glass'
},
{
    id:4,
    image:'https://www.thecocktaildb.com/images/media/drink/vyxwut1468875960.jpg',
    name:'GG',
    info:'Collins Glass',
    glass:'Optional Glass'
}]
export const loader=({request})=>{
        let url = new URL(request.url)
        let searchParam= url.searchParams.get('search'||'')
    console.log("loading",request.url,searchParam)
return {data}
}

const Landing = () => {
    const {data: drink}= useLoaderData()
    console.log("mydata",drink)
    let SearchTerm=""
  return (
    <div style={{backgroundColor:'#f8fafc'}}>
        <SearchForm search={SearchTerm}/>
        <CocktailList drinks={drink}/>
    </div>
  )
}

export default Landing
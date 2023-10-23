import React from 'react'
import './SearchForm.css'
import { Form, useNavigation } from 'react-router-dom'

const SearchForm = () => {
    const navigate=useNavigation()
    const isSubmiting=navigate.state==='submitting'
    return (
    <div className='search__container'>
        <div >
            <Form className='search__input' method='GET'>
                <input type='text' name='search'/>
                {/* <span>Search</span> */}
                <button type='submit' disabled={isSubmiting}>{isSubmiting?'..searching':'search'}</button>
            </Form>
        </div>
    </div>
  )
}

export default SearchForm
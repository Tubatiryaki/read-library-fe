import React from 'react'
import { FaFilter } from 'react-icons/fa'
import Author from './Author/Author'
import Categories from './categories/Categories'
import Publisher from './Publisher/Publisher'
import "./Sidebar.scss";

const Sidebar = () => {
  return (

  
    <>

    
      <Categories />
      <Author />
      <Publisher />
      
    </>
  )
}

export default Sidebar
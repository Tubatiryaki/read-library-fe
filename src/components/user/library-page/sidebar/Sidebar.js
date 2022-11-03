import React from 'react'
import Authors from './Author/Authors'
import Categories from './categories/Categories'
import Publisher from './Publisher/Publisher'

const Sidebar = () => {
  return (
    <>
      <Categories />
      <Authors />
      <Publisher />
    </>
  )
}

export default Sidebar
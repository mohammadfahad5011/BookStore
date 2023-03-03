import React from 'react'
import Search from './Search'

const NavBar = () => {
  return (
    <nav class="py-4 2xl:px-6">
    <div class="container flex items-center justify-between">
      <img src="./images/logo.svg" width="150px" class="object-contain" />

      <ul class="hidden md:flex items-center space-x-6">
        <li class="font-semibold cursor-pointer">Book Store</li>
        <li class="cursor-pointer">Wishlist</li>
        <li class="cursor-pointer">My Collection</li>
      </ul>

      <Search/>
    </div>
  </nav>
  )
}

export default NavBar
import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="header_logo">
                <StorefrontIcon className='header_logoImage' fontSize='large'/>
                <h2 className='header_logoTitle'>E-com</h2>
        </div>
        <div className="header_search">
            <input type="text" className='header_searchInput'/>
             <SearchIcon className='header_searchIcon'/>
        </div>
        <div className="header_nav">
            <div className="nav_item">
                <div className="nav_itemLineOne">Hello Guest</div>
                <div className="nav_itemLineTwo">Sign Up</div>
            </div>
            <div className="nav_item">
                <div className="nav_itemLineOne">Your</div>
                <div className="nav_itemLineTwo">Shop</div>
            </div>
            <div className="nav_itemBasket">
                <AddShoppingCartIcon />
                <div className="nav_itemLineTwo itemBasket_count">0</div>
            </div>
        </div>
    </div>
  )
}

export default Header
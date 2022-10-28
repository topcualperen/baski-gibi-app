import React from "react"
import "./Navbar.css"

const Navbar = () => {
     return (
          <nav className="nav-class">
               <div className="logo">
               <ul>
                    <li><a href="#">Tüm Ürünler</a></li>
                    <li><a href="#">Kartvizit</a></li>
                    <li><a href="#">Çıkartma</a></li>
                    <li><a href="#">Poster</a></li>
                    <li><a href="#">Afiş</a></li>
                    <li><a href="#">İletişim</a></li>
                    <li><a href="#">Hakkında</a></li>
               </ul>
               </div>
               
          </nav>
     )
}

export default Navbar;
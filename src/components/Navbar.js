import React from "react"
import "./Navbar.css"




const Navbar = () => {
     return (
          <nav class="menu">
  <ul>
  <li><a href="#">Ana Sayfa</a></li>
  <li><a href="#">Csharp</a>
    <ul>
      <li><a href="#">Console</a></li>
      <li><a href="#">Windows</a></li>
      <li><a href="#">WPF</a></li>
    </ul>  
  </li>
  <li><a href="#">Web Tasarım</a>
    <ul>
      <li><a href="#">HTML</a></li>
      <li><a href="#">CSS</a></li>
      <li><a href="#">ASP.NET</a></li>
    </ul>  
  </li>
  <li><a href="#">BTT</a>
    <ul>
      <li><a href="#">Anakart</a></li>
      <li><a href="#">İşlemci</a></li>
      <li><a href="#">Bellekler</a></li>
    </ul>  
  </li>
  <li><a href="#">İletişim deneme</a></li>
  </ul>
</nav>  
     )
}

export default Navbar;
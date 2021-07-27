import './styles.css'
export default function Header (){
    return(
        <nav className="navbar"> 
            <div className="header_upper">
              <h1>geeklouco.com</h1>
              <input type="text" placeholder="Herói? Vilão? O que você imaginar aqui..."/>
              <a href="#" className="login">Login</a>
            </div>
            <ul>
              <li><a href="">Universo Marvel</a></li>
              <li><a href="">Universo DC</a></li>
              <li><a href="">Star Wars</a></li>
              <li><a href="">Harry Potter</a></li>
            </ul>
          </nav>
    )
}
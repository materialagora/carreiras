import './styles.css'
import { Link } from 'react-router-dom'

import user_icon from '../../Assets/user-icon.svg'

export default function Header (){
    return(
        <nav className="navbar"> 
            <div className="header_upper">
              <Link to="/"><h1>geeklouco.com</h1></Link>
              <input type="text" placeholder="Herói? Vilão? O que você imaginar aqui..."/>
              <Link className="login" to="/login">
                <button>
                  <h3>Login</h3>
                  <img src={user_icon} alt="user"/>
                </button>
              </Link>
            </div>
            <ul>
              <li><button>Universo Marvel</button></li>
              
              <li><button>Universo DC</button></li>
              
              <li><button>Star Wars</button></li>
              
              <li><button>Vilões</button></li>
            </ul>
          </nav>
    )
}
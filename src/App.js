import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'


function App() {
  const [heroes, setHeroes] = useState({})
  const heroesApi = `https://www.superheroapi.com/api/${process.env.REACT_APP_TOKEN_HEROESAPI}`

  const getHero = async (id) => {
    await axios.get(`${heroesApi}/${id}`)
    .then((response)=> {
      setHeroes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

   
  useEffect(()=>{
    getHero(346)
    // eslint-disable-next-line
  }, [])

  return (
      <div className="App">
          <header> 
            <h1>SUPER HERÓIS</h1>
          </header>

          <div className="content">
          {heroes && (
            <ul className="heroes-list">
              <li key={heroes.id}>
                {heroes.image && (
                  <img src={heroes.image.url} alt={`${heroes.name}_img`}/>
                )}
                <h3>{heroes.name}</h3>
              </li>
              <li>
                {heroes.image && (
                  <img src={heroes.image.url} alt={`${heroes.name}_img`}/>
                )}
                <h3>{heroes.name}</h3>
              </li>
              <li>
                {heroes.image && (
                  <img src={heroes.image.url} alt={`${heroes.name}_img`}/>
                )}
                <h3>{heroes.name}</h3>
              </li>
              <li>
                {heroes.image && (
                  <img src={heroes.image.url} alt={`${heroes.name}_img`}/>
                )}
                <h3>{heroes.name}</h3>
              </li>
              <li>
                {heroes.image && (
                  <img src={heroes.image.url} alt={`${heroes.name}_img`}/>
                )}
                <h3>{heroes.name}</h3>
              </li>
            </ul>
            )
          }
          </div>
      </div>
    )
}

export default App

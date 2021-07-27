import './styles.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Cards(){
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
        getHero(70)
        // eslint-disable-next-line
    }, [])
    return(
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
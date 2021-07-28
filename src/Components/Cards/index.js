import './styles.css'
import { useEffect, useState } from 'react'
import api from '../../Services/api'

export default function Cards(){

    const [heroes, setHeroes] = useState({})

    const getHero = async () => {
        await api.get(`search/spider`)
            .then((response)=> {
                setHeroes(response.data)
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    useEffect(()=>{
        getHero()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return(
        <ul className="heroes-list">
            {heroes.results && 
                heroes.results.map(hero => {
                    return(
                        <li key={hero.id}>
                            {hero.image && 
                                (<img src={hero.image.url} alt={`${hero.name}_img`}/>)
                            }
                            <h3>{hero.name}</h3>
                        </li>
                    )
                })
            }
        </ul>
    )
} 
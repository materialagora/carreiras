import './styles.css'
import api from '../../Services/api'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Cards(props){
    const [heroes, setHeroes] = useState([])

    async function getHeroes(ids){ 
        let heroe = []
        for (let i in ids){
            await api.get(`${ids[i]}`)
                    .then((response)=> {
                        heroe.push(response.data)
                    })
                    .catch((error)=>{
                        console.log(error)
                    })
        }
        setHeroes(heroe) 
    }

    useEffect(()=>{
        getHeroes(props.listheros)
        // eslint-disable-next-line 
    }, [])
    if(heroes)
    console.log('herois: ', heroes)

    return(
        <div className="cards">
            <h1 style={{color: props.cor}}>{props.title}</h1>
            <div >
                <ul style={{borderTopColor: props.cor}} className="heroes-list">
                    {heroes.length === 0 && (
                        <>
                        <Link> <li> <h3>Carregando herói</h3> </li> </Link>
                        <Link> <li> <h3>Carregando herói</h3> </li> </Link>
                        <Link> <li> <h3>Carregando herói</h3> </li> </Link>
                        <Link> <li> <h3>Carregando herói</h3> </li> </Link>
                        </>
                    )}
                    {heroes && 
                        heroes?.map(hero => {
                            return(
                                hero && (
                                    <Link>
                                        <li key={hero.id}>
                                            {hero.image && 
                                                (<img src={hero.image.url} alt={`${hero.name}_img`}/>)
                                            }
                                            <h3>{hero.name}</h3>
                                        </li>
                                    </Link>
                                )
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
} 
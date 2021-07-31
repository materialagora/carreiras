import './styles.css'
import api from '../../Services/api'
import default_user from '../../Assets/default-user.jpg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Popup from '../Popup'

export default function Cards(props){
    const [heroes, setHeroes] = useState([''])
    const [modal, setModal] = useState(false)
    const [heroPopup, setHeroPopup] = useState({})

    const toggleModal = () => {
        setModal(!modal);
    };

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
    }, [props.listheros])
    
    return(
        <div className="cards">
            <h1>{props.title}</h1>
            <div>
                <ul className="heroes-list">
                    {heroes.length === 0 && (
                        props.listheros.map(id => {
                            return(
                                <Link> <li key={id}><img src={default_user} alt="user default"/><h3>Carregando herói</h3> </li> </Link>
                            )
                        })
                    )}
                    {heroes && 
                        heroes?.map(hero => {
                            return(
                                hero && (
                                    <>
                                        <Link 
                                            onClick={()=> {
                                                toggleModal() 
                                                setHeroPopup(hero)
                                        }}>
                                            <li key={hero.id}>
                                                {hero.image && 
                                                    (<img src={hero.image.url} alt={`${hero.name}_img`}/>)
                                                }
                                                <h3>{hero.name}</h3>
                                            </li>
                                        </Link>
                                        
                                    </>
                                )
                            )
                        })
                    }
                </ul>
            </div>
            {modal && (
                <Popup onClose={()=> toggleModal()} hero={heroPopup} />
            )}   
        </div>
    )
} 
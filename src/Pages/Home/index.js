import './styles.css'

import Cards from '../../Components/Cards'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'

export default function Home(){
    

    const marvel = ['30','107', '157', '213', '226', '251', '346', '489', '579', '620', '697']
    const dc = ['38','70', '156', '298', '263', '644', '720']    
    const starwars = ['208', '354', '418', '729']    
    const viloes = ['275', '280', '370', '414']    
    
    return(
        <div className="content">
            <Header/>
            <Banner/>            
            <Cards  title="Os melhores do universo marvel" cor="orangered" listheros={marvel}/>
            <Cards  title="Os melhores do universo DC" cor="lightseagreen" listheros={dc}/>
            <Cards  title="Nas estrelas com Star Wars" cor="#222d80" listheros={starwars}/>
            <Cards  title="Os seus vilões favoritos" cor="#ff0000" listheros={viloes}/>
        </div>  
    )
}
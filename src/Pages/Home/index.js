import './styles.css'

import Cards from '../../Components/Cards'
import Header from '../../Components/Header'
import Banner from '../../Components/Banner'

export default function Home(){
    

    const marvel = ['107','226','346','579','620','697']
    const dc = ['644','298','263','720']
    
    return(
        <div className="content">
            <Header/>
            <Banner/>
            <Cards title="Os melhores do universo marvel" cor="orangered" listheros={marvel}/>
            <Cards title="Os melhores do universo DC" cor="lightseagreen" listheros={dc}/>
        </div>  
    )
}
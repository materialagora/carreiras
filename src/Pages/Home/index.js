import './styles.css'

import Header from '../../Components/Header'
import Banner from '../../Components/Banner'
import Cards from '../../Components/Cards'

export default function Home(){
    return(
        <div className="content">
            <Header/>
            <Banner/>
            <Cards/>
        </div>  
    )
}
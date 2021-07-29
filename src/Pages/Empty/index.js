import './styles.css'
import Header from '../../Components/Header'
import deadpool from '../../Assets/deadpool.png'

export default function PageEmpty(){
    return(
        <div className="empty">
            <Header/>
            <div className="page-empty">
                <img src={deadpool} alt="deadpool triste"/>
                <h1>Desculpe, essa pagina ainda não existe!</h1>
            </div>
        </div>
    )
}
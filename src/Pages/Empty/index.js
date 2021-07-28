import deadpool from '../../Assets/deadpool.png'
import Header from '../../Components/Header'
import './styles.css'
export default function PageEmpty(){
    return(
        <div className="content">
            <Header/>
            <div className="page-empty">
                <img src={deadpool} alt="deadpool triste"/>
                <h1>Desculpe, essa pagina ainda não existe!</h1>
            </div>
        </div>
    )
}
import './styles.css'
import icon_close from '../../Assets/outline_close.png'

export default function Popup (props){
    const hero = props.hero

    return(
        <section className="popup">
            <div onClick={props.onClose} className="overlay"/>
            <div className="popup-content">
                <button className="exit-popup"onClick={props.onClose}> <img src={icon_close} alt="close button"/> </button>
                <img className="hero-profile"src={hero.image.url} alt={`${hero.name}_img`}/>
                <div className="main-info">
                    <h1>{hero.name}</h1>
                    <h2>{hero.biography['full-name']}</h2>
                    <div className="power-stats">
                        <h3>Estatísticas </h3>
                        <h4>Inteligência: {hero.powerstats['intelligence']}</h4>
                        <h4>Força: {hero.powerstats['strength']}</h4>
                        <h4>Velocidade: {hero.powerstats['speed']}</h4>
                        <h4>Durabilidade: {hero.powerstats['durability']}</h4>
                        <h4>Poder: {hero.powerstats['power']}</h4>
                        <h4>Combate: {hero.powerstats['combat']}</h4>
                    </div>
                </div>
                <div className="biography">
                    <h3>Biografia </h3>
                    <h4>Editora: <h5>{hero.biography['publisher']}</h5></h4>
                    <h4>Local de Nascimento: <h5>{hero.biography['place-of-birth']}</h5></h4>
                    <h4>Primeira aparição: <h5>{hero.biography['first-appearance']}</h5></h4>
                    <h4>Ocupação: <h5>{hero.work['occupation']}</h5></h4>
                </div>
            </div>
        </section>
    )
}
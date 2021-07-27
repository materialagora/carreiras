import './App.css'
import Cards from './Components/Cards'
import Header from './Components/Header'
import Banner from './Components/Banner'

function App() {
  
  return (
      <div className="App">
          <Header/>
          <Banner/>
          <div className="content">
            <Cards/>
          </div>        
      </div>
    )
}

export default App

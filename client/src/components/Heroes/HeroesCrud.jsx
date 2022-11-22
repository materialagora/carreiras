import React, { Component } from "react";
import Main from "../Main/Main";
import axios from 'axios'

const headerProps = {
    icon: 'users',
    title: "Cadastro Super Héroi",
    subtitle: "Cadastro Super Héroi : Incluir, Lista , Alterar e Excluir"
}

const baseUrl = 'http://localhost:7060/Heroes'
const initialState = {
    Heroes: {
      
        name: "",
        slug: "",
        powerstats: {
          intelligence: "",
          strength: "",
          speed: "",
          durability: "",
          power: "" ,
          combat : ""
        },
        appearance: {
          gender: "",
          race: "",
          height: [],
          weight: [],
          eyeColor: "",
          hairColor: ""
        },
        biography: {
          fullName: "",
          alterEgos: "",
          aliases: [],
          placeOfBirth: "",
          firstAppearance: "",
          publisher: "",
          alignment: ""
        },
        work: {
          occupation: "",
          base: ""
        },
        connections: {
          groupAffiliation: "",
          relatives: ""
        },
        images: {
          xs: "",
          sm: "",
          md: "",
          lg: ""
        }
      
       
      },
    list: []
}
 
export default class HeroesCrud extends Component {
    state = {...initialState}
  
    componentWillMount() {
        axios(baseUrl).then(resp => {
            
            this.setState({ list: resp.data})
            
        })
        
    }
 

    clear() {
        this.setState({ Heroes : initialState.Heroes})
    }

    save() {
        const hero = this.state.Heroes
        const method = hero.id ? 'put' : 'post'
        const url = hero.id ? `${baseUrl}/${hero.id}` : baseUrl
        axios[method](url, hero)
        .then(resp => {
            
            const list = this.getUpdateList(resp.data)
            this.setState({ Heroes: initialState.hero, list})
            
        })
    }
    getUpdateList(hero ,add = true) {
        const list = this.state.list.filter(u => u.id !== hero.id)
        if(add) list.unshift(hero)
         console.log(list)
        return list
    }
     updateField(event) {
        const Heroes = { ...this.state.Heroes }
         Heroes[event.target.name] = event.target.value
         Heroes.powerstats[event.target.name] = event.target.value
         Heroes.appearance[event.target.name] = event.target.value
         Heroes.biography[event.target.name] = event.target.value
         Heroes.work[event.target.name] = event.target.value
         Heroes.connections[event.target.name] = event.target.value
         Heroes.images[event.target.name] = event.target.value
        this.setState({ Heroes })     }
 
load(hero) {
  
    this.setState({ hero })
 
}

remove(hero) {
     axios.delete(`${baseUrl}/${hero.id}`).then(resp => {
        const list = this.getUpdateList(hero , false)
        this.setState({ list })
     })
}

renderTable() {
    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nome</th>
                    <th>slug</th>
                    
                </tr>
            </thead>
            <tbody>
                {this.renderRows()}
            </tbody>
        </table>
    )
}

renderRows() {
    return this.state.list.map( hero => {
        return (
            <tr key={hero.id}>
               <td>{hero.id}</td>
                <td>{hero.name}</td>
                <td>{hero.slug}</td>
                

                <td>
                    <button className=" btn btn-warning"
                    onClick={() => this.load(hero)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className=" btn btn-danger ml-2"
                    onClick={() => this.remove(hero)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })
}

 
    render() {
         
        return (
            <Main {...headerProps}>
                Cadastre Seu Super Héroi
                <div className="form">
            <div className="row">
                
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control"
                        name="name"
                        value={this.state.Heroes.name}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite seu Noe ..." />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Slug</label> 
                        <input type="text" className="form-control"
                        name="slug"
                        value={this.state.Heroes.slug}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite seu Slug ..." />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>intelligence</label>
                        <input type="text" className="form-control"
                        name="intelligence"
                        value={this.state.Heroes.powerstats.intelligence}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite seu intelligence ..." />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Strength</label> 
                        <input type="text" className="form-control"
                        name="strength"
                        value={this.state.Heroes.powerstats.strength}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite seu Strength ..." />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Speed</label>
                        <input type="text" className="form-control"
                        name="speed"
                        value={this.state.Heroes.powerstats.speed}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite seu Speed ..." />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Durability</label> 
                        <input type="text" className="form-control"
                        name="durability"
                        value={this.state.Heroes.powerstats.durability}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite seu Durability ..." />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Power</label>
                        <input type="text" className="form-control"
                        name="power"
                        value={this.state.Heroes.powerstats.power}
                        onChange={e => this.updateField(e)}
                         placeholder="Digite seu Power ..." />
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col-12  d-flex justify-content-end">
                    <button className="btn btn-primary"
                    onClick={e => this.save(e)}
                    >
                        Salvar
                    </button>
                    <button className="btn btn-secondary ml-2"
                    onClick={e => this.clear(e)} >
                        Canclar
                   </button>
                </div>
            </div>
        </div>
        {this.renderTable()}
            </Main>
           
        )
    }
}

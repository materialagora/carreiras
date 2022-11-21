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
        id : "",
        name: "",
        slug: "",
        powerstats: {
          intelligence: "",
          strength: "",
          speed: "",
          durability: "",
          power: "",
         
        },
       
      },
    list: []
}
 
export default class HeroesCrud extends Component {
    state = {...initialState}
  
    componentWillUnmount() {
        axios(baseUrl).then(resp => {
            console.log(resp.data)
            this.setState({ list : resp.data})
        })
    }
 

    clear() {
        this.setState({ Heroes : initialState})
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
         
        return list
    }
     updateField(event) {
        const Heroes = {...this.state.Heroes}
         Heroes[event.target.name] = event.target.value
         Heroes.powerstats[event.target.name] = event.target.value
         
         
        this.setState({ Heroes })     }
 
load(hero) {
  
    this.setState({ hero })
    console.log(hero)
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
                    <th>Nome</th>
                    <th>slug</th>
                    <th> intelligence</th>
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
                <td>{hero.name}</td>
                <td>{hero.slug}</td>
                <td>{hero.intelligence}</td>

                <td>
                    <button className=" btn btn-warning"
                    onClick={(hero) => this.load(hero)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                    <button className=" btn btn-danger ml-2"
                    onClick={(hero) => this.remove(hero)}>
                        <i className="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
        )
    })
}

 
    render() {
        console.log(this.state.list + '' + 'ddd')
        return (
            <Main {...headerProps}>
                Cadastre Seu Super Héroi
                <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>id</label> 
                        <input type="text" className="form-control"
                        name="id"
                        value={this.state.Heroes.id}
                        onChange={ event => this.updateField(event)}
                        placeholder="Digite seu id ..." />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control"
                        name="name"
                        value={this.state.Heroes.name}
                        onChange={ event => this.updateField(event)}
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
                        onChange={ event => this.updateField(event)}
                        placeholder="Digite seu Slug ..." />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>intelligence</label>
                        <input type="text" className="form-control"
                        name="intelligence"
                        value={this.state.Heroes.powerstats.intelligence}
                        onChange={ event => this.updateField(event)}
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
                        onChange={ event => this.updateField(event)}
                        placeholder="Digite seu Strength ..." />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Speed</label>
                        <input type="text" className="form-control"
                        name="speed"
                        value={this.state.Heroes.powerstats.speed}
                        onChange={ event => this.updateField(event)}
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
                        onChange={ event => this.updateField(event)}
                        placeholder="Digite seu Durability ..." />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Power</label>
                        <input type="text" className="form-control"
                        name="power"
                        value={this.state.Heroes.powerstats.power}
                        onChange={ event => this.updateField(event)}
                        
                        
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

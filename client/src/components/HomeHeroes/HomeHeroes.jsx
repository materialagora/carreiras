import React, { Component } from "react";
import Main from "../Main/Main";
import SearchBar from "../Search/SearchBar";

const headerHomeProps = {
    icon: 'home',
    title: "Pesquise Seu Super Héroi",
    subtitle: "Pesquise Seu Super Héroi : Busque Pelo Nome"
}

export default class HomeHeroes extends Component {
    render() {
        return (
            <Main {...headerHomeProps}>
               
                <SearchBar />
            </Main>
        )
    }
}
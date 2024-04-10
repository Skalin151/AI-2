import Picture from './Picture'
import React from "react";

class MovieList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            detalhe: 'Esta é a minha primeira lista de filmes',
            pictures: [ 
                {id: 1, src: 'https://m.media-amazon.com/images/M/MV5BMzMxNzMwN2YtNTY4NS00ODcyLWEwNGQtYjJmMjc1NzZlZjEwXkEyXkFqcGdeQXVyMjM5NDQzNTk@._V1_.jpg', title: 'Jojos Circus'}, 
                {id: 2, src: 'https://m.media-amazon.com/images/M/MV5BZDc3NGQ3ZWQtYjNkOC00MjhiLTg2N2YtNmZlOGNiZTFkOWNhXkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_FMjpg_UX1000_.jpg', title: 'Jojos Bizarre Adventures'}, 
                {id: 3, src: 'https://m.media-amazon.com/images/I/91i2aTy6mKL._AC_UF894,1000_QL80_.jpg', title: 'Jojo Rabbit'} 
            ] 
        };
    };
        render(){
            return(
                <div>
                    <h1>Lista de Filmes - State</h1>
                    {this.state.detalhe}
                    {this.state.pictures.map((picture) => {
                        return (
                            <div>
                                <h3>{picture.title}</h3>
                                <Picture src={picture.src}>
                                </Picture>
                            </div>
                        )
                    }
                    )
                    }
                </div>
            )
        }
}

export default MovieList;
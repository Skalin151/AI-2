import React from 'react';



class MovieList extends React.Component{
     render(){
        const detalhe = 'Esta é a minha primeira lista de filmes';
         return <div>
                    <h1>Lista de Filmes - Props</h1>
                    <Detalhe title='Lista de Filmes' children={detalhe}/> 
                    <Detalhe title='Lista de Filmes' children={detalhe}/> 
                    <Detalhe title='Lista de Filmes' children={detalhe}/> 
                    <Detalhe title='Lista de Filmes' children={detalhe}/> 
                    </div>
    }
} 

function Detalhe(props){
    return <p>{props.children}</p>; 

} 

export default MovieList;
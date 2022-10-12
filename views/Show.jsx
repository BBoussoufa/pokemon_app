const React = require('react')


class Show extends React.Component{
    render(){
        const {pokemon} = this.props
        console.log(pokemon);
        return(
           
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2> The pokemon is {pokemon.name}</h2>

          
        </div>)
    }
}

module.exports = Show

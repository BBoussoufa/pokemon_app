const React = require('react')

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };

class Index extends React.Component {
    render(){
        const {pokemon} = this.props
        console.log(pokemon);
        return(
            <div>
                <div style={myStyle}>My First React Component!</div>;
                <h1>See All The Pokemon!</h1>

                <ul>
              {pokemon.map((pokemon, idx) => (
                <li>
                  The <a href={`/pokemon/${idx}`}>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</a> {" "}
                  <br />
                  
                </li>
                ))}
                </ul>





            </div>
        )
    }
}

module.exports = Index
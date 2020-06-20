import React from 'react';
import Pelicula from "./Pelicula";
import peliculas from "./peliculas";

class Home extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            peliculas: peliculas,
            nombrePeli: {},
            linkPeli:{}
        };
    }


        handleClick = (linkPelicula, nombrePelicula) =>{
        this.setState({linkPeli: linkPelicula,
                        nombrePeli:nombrePelicula });
        
        console.log(this);
        const nombreUsuario = this.props.match.params.nombreUsuario;  
             
        this.props.history.push(`/usuario/${nombreUsuario}/${nombrePelicula}`);
        
        console.log(linkPelicula);
        
        
      }

    

    render() {
        console.log(this);

       const usuario = this.props.match.params.nombreUsuario;
        return (
            <React.Fragment>

                <div className="Galeria">

                    <div>
                        <img src={"../images/netflix1.gif"} width="200px" height="200px" alt="netflixGif" />
                        <p>
                            Bienvenido {usuario}
                        </p>
                    </div>

                </div>


                <div className="peliculasdiv" >

                    {Object.keys(this.state.peliculas).map(key => <Pelicula key={key}
                        details={this.state.peliculas[key]}
                        handleClick1={this.handleClick1}
                        handleClick={this.handleClick}
                    />)}


                </div>


            </React.Fragment>


        )
    }




}


export default Home;
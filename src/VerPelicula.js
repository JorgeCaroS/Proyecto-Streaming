import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { withRouter } from "react-router-dom";


class VerPelicula extends React.Component{

    state={
        linkPeli:"null"
      }; 

      

      
    render(){
        
        const pelis = this.props.peliculas;       
        const play = this.props.match.params.nombrePelicula;
        const found = pelis.find(element => element.nombre === play);
        
        console.log(pelis);
        console.log(play);
        console.log(found.video);
        
       
        
        return <React.Fragment  > 
           
            <div   className="verpeli"> 
                        
             <img onLoad = {console.log(this)} src={"/images/netflix1.gif"} width="200px" height="200px" alt="netflixGif1"/>      
             </div>  

             <div className="video">

                <ReactPlayer url={found.video}   alt="video1"/>
                </div>

             
             </React.Fragment>
    
    }
}

export default withRouter (VerPelicula);

//Exportamos de esta manera para poder tener acceso a las props de history
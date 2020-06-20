import React from 'react';
import peliculas from "./peliculas";


class Pelicula extends React.Component{
    
    
  myRef = React.createRef();

  handlePelicula = () =>{
      const {handleClick} = this.props;         
      const nombrePelicula = this.props.details.nombre;  
      const linkPelicula = this.props.details.video;   
      
      handleClick(linkPelicula, nombrePelicula); 
     
      console.log(linkPelicula);
      
  }


 
    render(){

        
        return(
            <React.Fragment>

         <div className="single-movie">
            
            <img src={this.props.details.image} 
            alt={this.props.details.nombre} 
            onClick={this.handlePelicula}
            ref={this.myRef}
            link={this.props.details.video}
            />  
            <br></br>
            <br></br>
            
                 
        </div>
        
        </React.Fragment>
        
        );
        
    }
    
}




export default Pelicula;
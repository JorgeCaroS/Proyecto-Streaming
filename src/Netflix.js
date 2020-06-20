import React from 'react';
import peliculas from "./peliculas";




class Netflix extends React.Component{

    constructor(props) {
        super(props);
     
      this.state = {
        peliculas:peliculas,
        nombrePeli: "null",
        linkPeli:"null"
       
      }; 
    
    }
    myInput = React.createRef();

    goApp = event => {
        event.preventDefault();

        const nombreUsuario = this.myInput.current.value;
        this.props.history.push(`/usuario/${nombreUsuario}`);
        console.log(this);

    }
    render(){
        return <React.Fragment> 
            <div className="login"> 

             <div>         
                <h1 className="titulo"> N e t f l i X </h1>
            </div>   

            <form className="formulario" height="200px" onSubmit={this.goApp}> 
                <input  className="diginombre" type="text" ref={this.myInput} required placeholder="Digita Tu Nombre" />
                <button className="botonombre" type="submit" > Ingresar </button>
             </form>
             </div>

             <div className="portada">
                 
             <img src={ "./images/welcome1.jpg" }alt="bienvenido" width="1600px" height="800px"/>
                
             
             </div>
             </React.Fragment>
    }
}

export default Netflix;
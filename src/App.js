import React from 'react';
import '../components/App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Netflix from "./Netflix";
import VerPelicula from './VerPelicula';
import Home from "./Home";
import peliculas from "./peliculas";
import NotFound from "./NotFound";



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      peliculas: peliculas,
      nombrePeli: "null",
      linkPeli: "null"
    };
  
}

  render() {

    
    console.log(this);
    

    return (
      <BrowserRouter>
       
        <Switch>
          <Route exact path="/" component={Netflix} />
          <Route exact path="/usuario/:nombreUsuario" component={Home}/>
          
          <Route exact path="/usuario/:nombreUsuario/:nombrePelicula/"
            component={() => <VerPelicula  peliculas={this.state.peliculas}  />} />
          <Route component={NotFound} />

        </Switch>
      </BrowserRouter>
    

    )

  }


}



export default App;

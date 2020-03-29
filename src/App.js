import React, { Component} from "react";
import preguntas from "./preguntas.js";
import Card from "./Card.js";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        preguntas: preguntas,
        respuestas: []
    }
    this.shareLink = this.shareLink.bind(this);
    this.shareText = this.shareText.bind(this);
    this.posibles = this.posibles.bind(this);
    this.puntos = this.puntos.bind(this);
    this.handleRespuesta = this.handleRespuesta.bind(this);
  }

  posibles(){
    return this.state.preguntas.futbol.map(v=>{return v.dificultad * 2}).reduce(function(t,v){ return t + v;});
  }
  puntos(){
    var puntos = this.state.respuestas.length == 0 ? 0 : this.state.respuestas.map(r => { return preguntas.futbol[r].dificultad * 2}).reduce(function(t,v){ return t + v;});

    return puntos.toString().padStart(3,'0');
  }
  handleRespuesta(index){
    var respuestas = this.state.respuestas;
    respuestas.push(index);
    this.setState({respuestas: respuestas});
  }
  shareText(){
    return encodeURI("¡Jugá a adivinar los futbolistas! ¡¡Yo ya hice "+ this.puntos()+"!! https://juego-quien-es.web.app/");
  
  }
  shareLink(){
    return "https://juego-quien-es.web.app/";
  
  }
  render(){
    return(
        <div>
            <div className="sticky top-0 z-50 mt-8 mx-auto w-320p md:w-660p lg:w-1000p rounded border-2 border-solid border-green-600 bg-green-600 text-white text-center shadow-md">
              <div className="text-2xl font-bold">PUNTOS: {this.puntos()} / {this.posibles()}</div>
              <div className="py-2 text-sm md:text-lg">Compartir: <a className="md:hidden bg-green-400 hover:bg-green-500 text-white font-bold p-1 rounded inline-flex items-center" target="_blank" href={`https://api.whatsapp.com/send??text=${this.shareText()}`}><img className="fill-current w-4 h-4" src="./img/whatsapp.svg" /></a>&nbsp;<a className="bg-blue-600 hover:bg-blue-800 text-white font-bold p-1 rounded inline-flex items-center" target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${this.shareLink()}`}><img className="fill-current w-4 h-4" src="./img/facebook.svg" /></a>&nbsp;<a className="bg-blue-300 hover:bg-blue-500 text-white font-bold p-1 rounded inline-flex items-center" target="_blank" href={`https://twitter.com/intent/tweet?text=${this.shareText()}`}><img className="fill-current w-4 h-4" src="./img/twitter.svg" /></a></div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto w-320p md:w-660p lg:w-1000p">
              { this.state.preguntas.futbol.map((pregunta,index) => {return <Card key={index} index={index} onRespuestaCorrecta={this.handleRespuesta} pregunta={pregunta} /> })}





            </div>
        </div>
    );
  }
}

export default App;

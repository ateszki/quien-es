import React, { Component} from "react";
import preguntas from "./preguntas.js";
import Card from "./Card.js";

class App extends Component{
  constructor(props) {
    console.log(preguntas)
    super(props);
    this.state = {
        preguntas: preguntas,
        ayudas: 3,
        respuestas: {}
    }
    this.posibles = this.posibles.bind(this);
    this.puntos = this.puntos.bind(this);
  }

  posibles(){
    return '200';
  }
  puntos(){
    return '000';
  }
  render(){
    return(
        <div>
            <div className="sticky top-0 z-50 mt-8 mx-auto w-320p md:w-660p lg:w-1000p rounded border-2 border-solid border-teal-600 bg-teal-600 text-white text-center shadow-md">
              <div className="text-2xl font-bold">PUNTOS: {this.puntos()} / {this.posibles()}</div>
              <div className="py-2 text-sm md:text-lg ">Ayudas restantes: {Array(this.state.ayudas).map((value, index) => { return '🚑'; })}</div>
              <div className="py-2 text-sm md:text-lg">Compartir: <a className="bg-green-400 hover:bg-green-500 text-white font-bold p-1 rounded inline-flex items-center" href=""><img className="fill-current w-4 h-4" src="./img/whatsapp.svg" /></a>&nbsp;<a className="bg-blue-600 hover:bg-blue-800 text-white font-bold p-1 rounded inline-flex items-center" href=""><img className="fill-current w-4 h-4" src="./img/facebook.svg" /></a>&nbsp;<a className="bg-blue-300 hover:bg-blue-500 text-white font-bold p-1 rounded inline-flex items-center" href=""><img className="fill-current w-4 h-4" src="./img/twitter.svg" /></a>&nbsp;<a className="bg-orange-300 hover:bg-orange-500 text-white font-bold p-1 rounded inline-flex items-center" href=""><img className="fill-current w-4 h-4" src="./img/instagram.svg" /></a></div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mx-auto w-320p md:w-660p lg:w-1000p">
              { this.state.preguntas.futbol.map((pregunta,index) => {return <Card key={index} pregunta={pregunta} /> })}

              <div className="relative rounded-lg border-4 border-solid border-green-600 w-320p h-450p" style={{background: `url(./img/futbol/01.jpg) 0 0 no-repeat`}}>
                <div className="w-full bg-green-600 text-white font-bold h-8 pt-1 pr-1 grid grid-cols-4 gap-0">
                  <div className="pl-1"><span className="inline-block h-5 w-5 border border-white border-solid text-center text-xs">✓</span></div><div className="text-right col-span-3">Dificultad: 🔥🔥🔥🔥</div>
                </div>
                <div className="bottom-0 absolute h-50p bg-green-600 w-full">
                  Diablo Etcheverry
                </div>
              </div>



            </div>
        </div>
    );
  }
}

export default App;

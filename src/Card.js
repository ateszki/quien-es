import React, { Component} from "react";

class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
        value: '',
        index: (this.props.index+1).toString().padStart(2,'0'),
    }
              
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.esCorrecto = this.esCorrecto.bind(this);
    this.ayuda = this.ayuda.bind(this);
    this.dificultad = this.dificultad.bind(this);
    this.enviarResultado = this.enviarResultado.bind(this);
  }
  handleChange(event){
    this.setState({value: event.target.value}, this.enviarResultado);
    
  }
  enviarResultado(){
    if(this.esCorrecto()){
        this.props.onRespuestaCorrecta(this.props.index);
    }
  }
  esCorrecto(){
    return this.props.pregunta.nombre.toLowerCase() == this.state.value.toLowerCase();
  }

  handleClick(event){
    this.ayuda();
  }
  dificultad(){
    var d = '';
    for(var i=0;i < this.props.pregunta.dificultad; i++){
        d = d + '⚽️';//
    } 
    return d;
  }
  ayuda(){
    var pregunta = this.props.pregunta.nombre;
    var terms = pregunta.split(" ");
    var ayudaStr = terms.length == 1 ? pregunta.substr(0,3) : terms[0];
    this.setState({value: ayudaStr });
  }
  render(){
    const correcto = this.esCorrecto();

    let button;

    if(correcto){
        //button = <img src="./img/checkmark.svg" className="fill-current text-white inline-block h-5 w-5" />;
        button = <svg className="fill-current text-white inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 11l2-2 5 5L18 3l2 2L7 18z"/></svg>;
    } else {
        button = <button className="flex-shrink-0 bg-none border-none text-md py-1 px-2" type="button" onClick={this.handleClick}>🚑</button>;
    }

    return(
        <div className={`relative rounded-lg border-4 border-solid ${this.esCorrecto() ? 'border-green-600' : 'border-red-600'} w-320p h-450p`} style={{background: `url(./img/futbol/${this.state.index}.jpg) 0 0 no-repeat`}}>
            <div className={`w-full ${this.esCorrecto() ? 'bg-green-600' : 'bg-red-600'} text-white text-center font-bold h-8 pt-1 pr-1` }>Dificultad: {this.dificultad()}</div>
            <div className={`bottom-0 absolute h-50p ${this.esCorrecto() ? 'bg-green-600' : 'bg-red-600'} w-full`}>
              <div className="flex items-center border-b border-b-2 border-white pt-1 px-1">
                <input className="appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Escribe aquí la respuesta" />
                {button}
              </div>
            </div>
        </div>
    );
  }
}

export default Card;

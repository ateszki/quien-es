import React, { Component} from "react";


class Card extends Component{
  constructor(props) {
    super(props);
    this.state = {
        value: '',
    }
  }
  render(){
    return(
        <div className="relative rounded-lg border-4 border-solid border-green-600 w-320p h-450p" style={{background: `url(./img/futbol/01.jpg) 0 0 no-repeat`}}>
            <div className="w-full bg-green-600 text-white font-bold h-8 pt-1 pr-1 grid grid-cols-4 gap-0">
              <div className="pl-1"><span className="inline-block h-5 w-5 border border-white border-solid text-center text-xs">✓</span></div><div className="text-right col-span-3">Dificultad: 🔥🔥🔥🔥</div>
            </div>
            <div className="bottom-0 absolute h-50p bg-green-600 w-full">
              {this.props.pregunta.nombre}
            </div>
        </div>
    );
  }
}

export default Card;

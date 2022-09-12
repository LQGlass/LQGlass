function CasillaBlog (props){
    return(
        <div className="casillaBlog">
        <h3 className="tituloCasilla">{props.titulo}</h3>
        <p className="descripcionCasilla"> {props.descripcion} </p>
      </div>
    )
}

export default CasillaBlog;
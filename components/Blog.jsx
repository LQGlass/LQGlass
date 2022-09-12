import CasillaBlog from "./CasillaBlog";

function crearEntrada(entrada){
    return <CasillaBlog 
        key={entrada.id}
        titulo={entrada.title}
        descripcion={entrada.body}
    />
}

function Blog (props){

    return(
        <div className="blogHome">
      <h2>Estudios clinicos para cuidar tu salud.</h2>
      <div className="blogHomeWrapper">
       {props.content.map(crearEntrada)}
      </div>

      </div>
    )
}

export default Blog;
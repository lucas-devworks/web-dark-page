import estilos from './Card.module.css';

export default function Card(props) {

    return (
        <div className={props.State ? estilos.dark : estilos.container_card}>
            <div className={estilos.paragrafo}>
              <spam>{props.data}</spam>
              <h3>{props.titulo}</h3>
              <small>{props.subtitulo}</small>
            </div>
            <p>{props.conteudo}</p>
        </div>
    )
}
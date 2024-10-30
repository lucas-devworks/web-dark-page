import estilos from './Rodape.module.css';
import Image from 'next/image';
//imagens
import logo from '/public/logo.png';
import face from '/public/facebook.png';
import x from '/public/twitter.png';
import linkedin from '/public/linkedin.png';
import dribble from '/public/dribble.png';
import be from '/public/behance.png';
import G from '/public/google.png';

export default function Rodape(props) {
    return (
        <footer className={props.State ? estilos.dark : estilos.container_rodape}>
            <div className={estilos.secao}>
                <div className={estilos.paragrafo}>
                    <Image src={logo} />
                    <p>Ajudamos a criar uma personalidade digital construindo sua
                    marca no ambiente online utilizando estratégias, ferramentas
                    e tecnologias personalizadas.
                    </p>
                </div>

                <div className={estilos.container_redes}>
                    <ul type='none' className={estilos.lista_icons}>
                        <li><Image src={face}     title='Facebook'/>  </li>
                        <li><Image src={x}        title='Twitter/X'/> </li>
                        <li><Image src={linkedin} title='Linkedin'/>  </li>
                        <li><Image src={dribble}  title='Dribble'/>   </li>
                        <li><Image src={be}       title='Behance'/>   </li>
                        <li><Image src={G}        title='Google+'/>   </li>
                    </ul>
                </div>
            </div>
            
                <div className={estilos.copy}><small>Copyright &copy; <span>Lucas Teixeira Santos</span></small></div>
        </footer>
    )
}
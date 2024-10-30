// estilos
import estilos from './Topo.module.css';
import Image from 'next/image';
//Imagens
import logo from '/public/logo.png';
import { RiMoonClearLine } from "react-icons/ri"; // moon
import { PiSunBold } from "react-icons/pi"; // sun


export default function Topo(props) {

    return (
        <header className={estilos.container_cabecalho}>
            <div className={props.State && estilos.dark}   > {/* if ternário compactado */}
                <Image src={logo} />
                <button title='Ativar/Desativar Dark Mode' className={estilos.botao}
                    onClick={props.acao_onClik}> {/* captura de click */}
                {props.State ? <PiSunBold/> : <RiMoonClearLine/> } {/* If ternário */}
                </button>
            </div>
        </header>
    )
}
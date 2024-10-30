// use state
'use client';
import { useState } from 'react';
// estilos
import estilos from "./page.module.css";
// Módulos
import Topo from "./componentes/Topo";
import SecaoBanner from "./componentes/SecaoBanner";
import SecaoExperienciaTrabalho from "./componentes/SecaoExperienciaTrabalho";
import Rodape from "./componentes/Rodape";

export default function Home() {
    // lógica //
    const [temaDark, setTemaDark] = useState(false); // variável de estado
      // função
      function alterarTema () {
            setTemaDark(!temaDark);
        }

  return (
    <div>
        <Topo acao_onClik={alterarTema} State={temaDark} /> {/* envido de dados via props */}
        <main>
          <SecaoBanner />
          <SecaoExperienciaTrabalho State={temaDark} />
        </main>
        <Rodape State={temaDark}/>
    </div>  
  )
}

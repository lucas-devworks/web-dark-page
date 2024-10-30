import estilos from './SecaoExperienciaTrabalho.module.css';
// componente Card
import Card from '../Card';

export default function SecaoExperienciaTrabalho(props) {
    return (
        <section className={props.State ? estilos.dark: estilos.main}>
            <div className={estilos.introducao}>
                <h2>Experiência De Trabalho</h2>    
                <p>Há mais de 10 anos no mercado de Branding, Design Gráfico, Criação de Sites e
                Marketing Digital, nos empenhamos diariamente para entregar resultados que
                tragam impacto aos nossos clientes.
                </p>
            </div>

            <div className={estilos.secao_cards}>
                <Card 
                  State={props.State} // state enviado de componente para componente
                  data={'JUNHO 2012 - 2016'} titulo={'Web Designer'} subtitulo={'Pied Piper StartUp.'}
                  conteudo={`Criação de Landing pages, sites institucionais e E-commerces completament e
                             pesonalizados e otimizados para buscadores`}
                />
                <Card
                  State={props.State}
                  data={'AGOSTO 2016 - 2019'} titulo={'Product Designer'} subtitulo={'E Corp.'}
                  conteudo={`Criação de modelos estratégicos de conversão identificando o cliente e mapeando
                            toda a sua jornada de compra`}
                />
                <Card 
                  State={props.State}
                  data={'FEVEREIRO 2019 - 2021'} titulo={'Digital Consulting'} subtitulo={'Arasaka Inc.'}
                  conteudo={`Consultoria em estratégias digitais para todas as etapas do ciclo do projeto,
                            desde a definição incial até a execução`}
                /> 
            </div>
        </section>
    )
}
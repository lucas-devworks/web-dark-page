import estilos from './SecaoBanner.module.css';

export default function SecaoBanner() {
    return (
        <section className={estilos.container_banner}>
                <div className={estilos.background}>
                    {/* banner */} 
                </div>

                <div className={estilos.titulo}>
                    <p>BRADING / UI / UX / TECNOLOGIA</p>
                    <h2>Agência de Brading</h2>
                    <span>e desgin digital</span>
                </div>
        </section>
    )
}
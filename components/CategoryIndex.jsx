import { fetcher } from "../lib/api";
import styles from "../styles/main.module.scss";
import TarjetaDescriptiva from "./tarjetaDescriptiva";

export async function getStaticProps(){
    const tarjetasResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/categorias-de-estudios`);
    console.log(tarjetasResponse);
    return {
        props: {
            categorias-de-estudio : tarjetasResponse,
        },
    };

}



const CategoryIndex = ({categorias-de-estudio}) => {
    return (
        
        
        <section className={styles.categoryIndex}>
            <div>
                <h2>Estudios clinicos para cuidar tu salud.</h2>
            </div>
            <div className={styles.gridTarjetas}>

         
           {categorias-de-estudio.map(tarjeta => (
            <div key= {tarjeta.id}>
                <h3>{tarjeta.Categoria}</h3>

            </div>
           ))}

                
            
            
            </div>
        </section>

    );
}

export default CategoryIndex;
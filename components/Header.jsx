import styles from "../styles/main.module.scss";

function Header({title}){
    return (
        <>
        <div className={styles.hero}>
            <h1>{title ? title : "Default title"}</h1>
            
        </div>
        <svg className={styles.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#071d49" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,208C480,171,600,85,720,85.3C840,85,960,171,1080,186.7C1200,203,1320,149,1380,122.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>        </>
    );

}

export default Header;
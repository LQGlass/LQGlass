import Link from "next/link";
import styles from "./Button.module.scss";

const Button = props => {
  return (
    <Link href={props.url}>
      <button className={styles.botonPrimario}> {props.content}</button>
    </Link>
  );
};

export default Button;

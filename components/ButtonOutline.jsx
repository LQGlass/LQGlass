import styles from "./ButtonOutline.module.scss";
import Link from "next/link";

function ButtonOutline(props) {
  return (
      <Link href={props.url}><button className={styles.buttonOutline}>
        {props.content}
      </button></Link>
  );
}

export default ButtonOutline;

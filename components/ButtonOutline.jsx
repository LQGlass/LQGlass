import styles from "./ButtonOutline.module.scss";
import Link from "next/link";

function ButtonOutline(props) {
  return (
    <div>
      <button className={styles.buttonOutline}>
        <Link href={props.url}>{props.content}</Link>
      </button>
    </div>
  );
}

export default ButtonOutline;

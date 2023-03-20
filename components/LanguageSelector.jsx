import Image from "next/image";
import styles from "./Cintilla.module.scss";
import { Router, useRouter } from "next/router";
export default function LanguageSelector() {
  const router = useRouter();
  function handleLanguage(lang) {
    router.push(router.pathname, router.pathname, {
      locale: lang,
    });
  }
  return (
    <>
      <div className={styles.idiomas}>
        <div onClick={() => handleLanguage("es")} className={styles.flag}>
          <Image
            src="/images/flags/mexico.png"
            alt="bandera de méxico"
            width={100}
            height={100}
          />
        </div>
        <div onClick={() => handleLanguage("en")} className={styles.flag}>
          <Image
            src="/images/flags/united-states.png"
            alt="bandera de estados unidos"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
}

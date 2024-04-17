import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Logo.module.css";

const Logo = () => {
  return (
    <Link href={"https://wolefabikun.com/"}>
      <span className={styles.logo}>
        <Image src="/lubot.png" alt="Wole Fabikun" width={30} height={45} />
      </span>
    </Link>
  );
};

export default Logo;
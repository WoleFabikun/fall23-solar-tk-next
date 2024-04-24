import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href={"/"}>
      <span style={{ fontSize: '35px', fontWeight: 'bold' }}>
        Solar-TK
      </span>
    </Link>
  );
};

export default Logo;
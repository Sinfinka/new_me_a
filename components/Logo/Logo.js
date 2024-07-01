// Logo.js

import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" passHref>
      <div>
        <Image
          src="/logo.png"
          alt="Company Logo"
          width={227}
          height={115}
          priority={true}
        />
      </div>
    </Link>
  );
};

export default Logo;

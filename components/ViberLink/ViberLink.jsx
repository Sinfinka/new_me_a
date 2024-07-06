import React from "react";
import Link from "next/link";
import Icon from "../icons";

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

const ViberLink = () => {
  return (
    <Link
      href={`viber://chat?number=${phoneNumber}`}
      passHref
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon id="icon-viber" width="100%" height="100%" />
    </Link>
  );
};

export default ViberLink;

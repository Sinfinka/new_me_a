import React from "react";
import Link from "next/link";
import Icon from "../../components/icons";

const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER;

const WhatsAppLink = () => {
  return (
    <Link
      href={`https://wa.me/${phoneNumber}`}
      passHref
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon id="icon-whatsapp" width="100%" height="100%" />
    </Link>
  );
};

export default WhatsAppLink;

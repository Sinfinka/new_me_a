import React from "react";
import Link from "next/link";
import Icon from "../icons";

const telegramName = process.env.NEXT_PUBLIC_TELEGRAM_NAME;

const TelegramLink = () => {
  return (
    <Link
      href={`https://t.me/${telegramName}`}
      passHref
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon id="icon-telegram" width="100%" height="100%" />
    </Link>
  );
};

export default TelegramLink;

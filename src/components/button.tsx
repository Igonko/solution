import Link from "next/link";
import React, { FC } from "react";

interface IButton {
  text: string;
  link: {
    href: string;
    target: string;
  };
  className: string;
}

const Button: FC<IButton> = ({ text, link, className }) => {
  return (
    <Link href={link.href} target={link.target} className={className}>
      {text}
    </Link>
  );
};

export default Button;

"use client";

import Menu from "@/components/Header/Menu";
import Logo from "./Logo";

export default function Header(props: any) {
  return (
    <header>
      <Logo />
      <Menu {...props} />
    </header>
  );
}

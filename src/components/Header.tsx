import Link from "next/link";
import CartIcon from "@/components/CartIcon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import * as m from "@/paraglide/messages";

export const Header = () => {
  return (
    <header className="p-4 bg-slate-950 text-white flex justify-between items-center">
      <Link href="/">{m.home()}</Link>
      <Link href="/cart" className="ml-4">
        <CartIcon />
      </Link>
      <LanguageSwitcher />
    </header>
  );
};

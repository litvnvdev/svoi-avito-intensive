import { Hamburger, Logo } from ".";

export function Header() {
  return (
    <header className="px-6 py-6">
      <div className="flex justify-between">
        <div className="flex gap-2 font-bold text-xl">
          <Logo />
          Abito
        </div>
        <Hamburger />
      </div>
    </header>
  );
}

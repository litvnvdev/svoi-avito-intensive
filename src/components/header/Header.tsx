import { Hamburger, Logo } from ".";
import { useMediaQuery } from "../../shared/hooks/useMediaQuery";
import { Search } from "../search";
import { UiButton } from "../uikit/UiButton";

export function Header() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <header className="flex flex-col gap-6">
      <div className="flex justify-between">
        <div className="flex gap-2 font-bold text-xl cursor-pointer">
          <Logo />
          Abito
        </div>
        {isDesktop ? (
          <div className="flex gap-4 items-center">
            <button className="hover:text-gray-400 transition-colors">
              Вход и Регистрация
            </button>
            <UiButton>Подать объявление</UiButton>
          </div>
        ) : (
          <Hamburger />
        )}
      </div>
      <Search />
    </header>
  );
}

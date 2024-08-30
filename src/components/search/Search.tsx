import { UiButton } from "../uikit/UiButton";
import { SearchIcon } from "./SearchIcon";

export function Search() {
  return (
    <div className="w-full rounded-lg flex justify-between items-center bg-blue-500 p-1">
      <input
        type="text"
        placeholder="Поиск по объявлениям"
        className="p-3 bg-white w-full rounded-lg outline-none"
      />
      <UiButton>
        <p className="hidden lg:block text-white text-lg">Найти</p>
        <SearchIcon />
      </UiButton>
    </div>
  );
}

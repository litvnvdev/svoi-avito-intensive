import { Link } from "react-router-dom";
import { UiButton } from "../../components/uikit/UiButton";

export function NotFoundPage() {
  return (
    <section className="flex justify-center items-center h-[95dvh]">
      <div className="w-full h-1/2 rounded-2xl p-3 bg-gray-100  flex flex-col gap-8 justify-center items-center lg:h-3/4 lg:w-3/4">
        <h1 className="font-bold text-2xl lg:text-4xl">Упс! Ошибка 404 😓 </h1>
        <p className="w-3/4 font-medium text-center text-lg lg:text-2xl">
          Товар не существует, либо ещё не был добавлен
        </p>

        <Link to="/">
          <UiButton>Вернуться на главную страницу</UiButton>
        </Link>
      </div>
    </section>
  );
}

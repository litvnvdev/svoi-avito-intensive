import { Title } from "../../../components/uikit/Title";
import { UiButton } from "../../../components/uikit/UiButton";

interface PageContentProps {
  img: string;
  title: string;
  description: string;
  price: number;
}

export function ProductContent({
  img,
  title,
  description,
  price,
}: PageContentProps) {
  return (
    <section className="lg:flex lg:flex-row lg:gap-12">
      <div className="mt-4 flex flex-col gap-4 lg:w-8/12 lg:mt-8 ">
        <Title>{title}</Title>
        <img className="w-full" src={img} alt={title} />
        <p>{description}</p>
      </div>
      <div className="flex flex-col gap-8 mt-4 lg:mt-8">
        <p className="font-bold text-2xl">{price} ₽</p>
        <UiButton>Показать телефон</UiButton>
      </div>
    </section>
  );
}

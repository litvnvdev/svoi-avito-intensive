import { Services } from "../../../components/services-and-facilities";
import { Title } from "../../../components/uikit/Title";
import { UiCard } from "../../../components/uikit/UiCard";

const cardData = [
  {
    id: 1,
    title: "Пвх материал 2й сорт",
    img: "https://i.postimg.cc/3xDLcsQY/Rectangle-3-2x.png",
    price: 170,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: 2,
    title: "Пвх материал 1й сорт",
    img: "https://i.postimg.cc/3xDLcsQY/Rectangle-3-2x.png",
    price: 170,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: 3,
    title: "Пвх материал 3й сорт",
    img: "https://i.postimg.cc/3xDLcsQY/Rectangle-3-2x.png",
    price: 170,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
  {
    id: 4,
    title: "Пвх материал 4й сорт",
    img: "https://i.postimg.cc/3xDLcsQY/Rectangle-3-2x.png",
    price: 170,
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
  },
];

export function HomePageContent() {
  return (
    <div className="mt-8 flex flex-col">
      <Title>Рекомендации для вас</Title>
      <div className="grid grid-cols-1 gap-8">
        {cardData.map((card) => (
          <UiCard key={card.id} {...card} />
        ))}
      </div>
      <Services />
    </div>
  );
}

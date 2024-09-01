import { Link } from "react-router-dom";
import { Title } from "../../../components/uikit/Title";
import { UiCard } from "../../../components/uikit/UiCard";
import { pageProductData } from "../../product-page/constants";

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
    <>
      <div className="mt-8 flex flex-col lg:flex-row">
        <div className="flex flex-col">
          <Title>Рекомендации для вас</Title>
          <div className="grid grid-cols-1 justify-items-start sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {pageProductData.map((card) => (
              <Link key={card.id} to={`product-page/${card.id}`}>
                <UiCard {...card} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

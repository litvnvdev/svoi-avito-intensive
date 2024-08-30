import { Title } from "../uikit/Title";
import { ServicesCard } from "./ServicesCard";
import { CarIcon, DeliveryIcon, LoveIcon } from "./icons";

const servicesCardData = [
  {
    id: 1,
    icon: <DeliveryIcon />,
    title: "Доставка",
    description: "Проверка при получении и возможность бесплатно вернуть товар",
  },
  {
    id: 2,
    icon: <CarIcon />,
    title: "Автотека",
    description:
      "Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах",
  },
  {
    id: 3,
    icon: <LoveIcon />,
    title: "Онлайн-бронирование жилья",
    description:
      "Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России",
  },
];

export function Services() {
  return (
    <section className="mt-9 flex flex-col pb-9 border-b border-gray-400 rounded">
      <Title>Сервисы и услуги</Title>
      <div className="flex flex-col">
        {servicesCardData.map((card) => (
          <ServicesCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

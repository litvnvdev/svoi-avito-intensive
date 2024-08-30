interface UiCardProps {
  title: string;
  img: string;
  price: number;
  address: string;
  date: string;
}

export function UiCard({ title, img, price, address, date }: UiCardProps) {
  return (
    <div className="w-full flex flex-col gap-1">
      <img src={img} alt="card_img" />
      <h1 className="font-bold text-lg text-blue-500">{title}</h1>
      <h3 className="font-bold text-lg">{price} ₽</h3>
      <div className="flex flex-col gap-1 text-gray-300">
        <p>{address}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

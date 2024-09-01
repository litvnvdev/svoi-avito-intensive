interface UiCardProps {
  title: string;
  img: string;
  price: number;
  address: string;
  date: string;
}

export function UiCard({ title, img, price, address, date }: UiCardProps) {
  return (
    <div className="w-full  flex flex-col gap-1 cursor-pointer group lg:w-11/12">
      <img
        className="rounded-2xl group-hover:opacity-85 transition-opacity"
        src={img}
        alt="card_img"
      />
      <h1 className="font-bold text-lg text-blue-500 cursor-pointer group-hover:text-blue-400 transition-colors">
        {title}
      </h1>
      <h3 className="font-bold text-lg group-hover:text-gray-400 transition-colors">
        {price.toLocaleString()} ₽
      </h3>
      <div className="flex flex-col gap-1 text-gray-300">
        <p>{address}</p>
        <p>{date}</p>
      </div>
    </div>
  );
}

interface ServicesCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function ServicesCard({ icon, title, description }: ServicesCardProps) {
  return (
    <div className="flex flex-col gap-1 mb-10">
      <div>{icon}</div>
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-sm w-2/3">{description}</p>
    </div>
  );
}

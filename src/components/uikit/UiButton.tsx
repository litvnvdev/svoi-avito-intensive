type ButtonProps = {
  children: string | React.ReactNode;
};

export function UiButton({ children }: ButtonProps) {
  return (
    <button className="flex justify-between md:justify-start md:gap-3 items-center text-white bg-blue-600 w-fit hover:bg-blue-700 h-12 rounded-lg transition-colors px-3">
      {children}
    </button>
  );
}

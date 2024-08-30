interface HomePageLayoutProps {
  children: any;
  header: React.ReactNode;
}

export function HomePageLayout({ children, header }: HomePageLayoutProps) {
  return (
    <div className="min-h-screen">
      {header}
      <main className="flex flex-col gap-4">{children}</main>
    </div>
  );
}

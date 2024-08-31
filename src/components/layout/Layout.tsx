interface HomePageLayoutProps {
  children: any;
  header: React.ReactNode;
  sidebar: React.ReactNode;
}

export function Layout({ children, header, sidebar }: HomePageLayoutProps) {
  return (
    <div className="min-h-screen">
      {header}
      <div className="flex flex-col lg:flex-row">
        <main className="flex flex-col gap-4">{children}</main>
        {sidebar}
      </div>
    </div>
  );
}

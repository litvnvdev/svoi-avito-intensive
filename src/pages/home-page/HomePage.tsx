import { Header } from "../../components/header";
import { HomePageContent, HomePageLayout } from "./components";

export function HomePage() {
  return (
    <HomePageLayout header={<Header />}>
      <HomePageContent />
    </HomePageLayout>
  );
}

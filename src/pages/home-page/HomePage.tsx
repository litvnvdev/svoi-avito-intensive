import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { Services } from "../../components/services-and-facilities";
import { ProductPage } from "../product-page/ProductPage";
import { HomePageContent } from "./components";

export function HomePage() {
  return (
    <Layout header={<Header />} sidebar={<Services />}>
      <HomePageContent />
      <ProductPage />
    </Layout>
  );
}

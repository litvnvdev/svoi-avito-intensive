import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { Services } from "../../components/services-and-facilities";
import { ProductContent } from "./components";
import { pageProductData } from "./constants";

export function ProductPage() {
  const newPageData = pageProductData[0];
  console.log(newPageData);
  return (
    <Layout header={<Header />} sidebar={<Services />}>
      <ProductContent {...newPageData} />
    </Layout>
  );
}

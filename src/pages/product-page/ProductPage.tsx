import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { Layout } from "../../components/layout";
import { Services } from "../../components/services-and-facilities";
import { ProductContent } from "./components";
import { pageProductData } from "./constants";
import { NotFoundPage } from "../not-found-page";

export function ProductPage() {
  const { productId } = useParams();
  const newPageData = pageProductData.filter(
    (product) => product.id === productId
  );

  if (!newPageData.length) {
    return <NotFoundPage />;
  }

  return (
    <Layout header={<Header />} sidebar={<Services />}>
      <ProductContent {...newPageData[0]} />
    </Layout>
  );
}

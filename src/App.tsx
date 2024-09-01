import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home-page/HomePage";
import { ProductPage } from "./pages/product-page/ProductPage";
import { NotFoundPage } from "./pages/not-found-page";

function App() {
  return (
    <div className="container flex flex-col gap-6 p-6 sm:mx-auto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-page/:productId" element={<ProductPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;

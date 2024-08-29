import { Header } from "./components/header";
import { Search } from "./components/search";

function App() {
  return (
    <div className="container flex flex-col gap-6 p-6 sm:mx-auto">
      <Header />
      <Search />
    </div>
  );
}

export default App;

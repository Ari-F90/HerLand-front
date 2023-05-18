import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Homepage } from "../components/pages/homepage/homepage";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;

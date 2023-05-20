import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Menu, menuOptions } from "../components/menu/menu";
import { Homepage } from "../components/pages/homepage/homepage";

function App() {
  return (
    <div className="container">
      <Header>
        <Menu props={menuOptions}></Menu>
      </Header>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;

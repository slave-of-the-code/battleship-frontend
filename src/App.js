import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";
import { BoardSetting } from "./components/boardSetting/boardSetting";
import { GameList } from "./components/gameList/gameList";
import { Home } from "./pages/home/Home";
import { Menu } from "./components/menu/Menu";
import { ShipSetting } from "./components/shipSetting/shipSetting";
import { Languages } from "./components/languages/Languages";
import { DarkSetting } from "./components/darkSetting/DarkSetting";
import { By } from "./components/by/By";
import { LogoSantex } from "./components/logoSantex/LogoSantex";
import { SocialNetworks } from "./components/socialNetworks/SocialNetworks";

function App() {
  return (
    <Router>
      <header>
        <div className="logo">Battleship</div>
        <div className="menu">
          <Menu></Menu>
          <div className="siteSettings">
            <DarkSetting></DarkSetting>
            <Languages></Languages>
          </div>
        </div>
      </header>
      <section>
        <Route exact path="/" component={Home}></Route>
        <Route path="/GameList" component={GameList}></Route>
        <Route path="/ShipSetting" component={ShipSetting}></Route>
        <Route path="/BoardSetting/:id" component={BoardSetting}></Route>
      </section>
      <footer>
        <LogoSantex></LogoSantex>
        <By></By>
        <SocialNetworks></SocialNetworks>
      </footer>
    </Router>
  );
}

export default App;

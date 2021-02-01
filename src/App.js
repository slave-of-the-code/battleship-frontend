import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import "./App.scss";
import { BoardSetting } from "./pages/boardSetting/BoardSetting";
import { Home } from "./pages/home/Home";
import { Menu } from "./components/menu/Menu";
import { ShipSetting } from "./pages/shipSetting/ShipSetting";
import { GameList } from "./pages/gameList/GameList";
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
          <Menu />
          <div className="siteSettings">
            <DarkSetting />
            <Languages />
          </div>
        </div>
      </header>
      <section>
        <Route exact path="/" component={Home} />
        <Route path="/GameList" component={GameList} />
        <Route path="/ShipSetting" component={ShipSetting} />
        <Route path="/BoardSetting/:id" component={BoardSetting} />
    
        /* page not found */
        <Route component={404Componenet} />
        /* or */
        <Redirect to="/" />
    
    
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

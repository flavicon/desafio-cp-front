import { Navbar } from "./Components/Navbar";
import { BannerPromotions } from "./Components/BannerPromotions";
import { Home } from './Components/Home';
import { Books } from './Components/Books';
import { Footer } from './Components/Footer';
import { GlobalStyle } from './styles/global';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path="/Books">
            <Books />
          </Route>
          <Route path="/">
            <BannerPromotions />
            <Home />
          </Route>
        </Switch>
      <Footer />
      <GlobalStyle />
    </Router>
  );
}

export default App;

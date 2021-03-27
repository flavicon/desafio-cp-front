import { Navbar } from "./Components/Navbar";
import { BannerPromotions } from "./Components/BannerPromotions";
import { Home } from './Components/Home';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Navbar />
      <BannerPromotions />
      <Home />
      <GlobalStyle />
    </>
  );
}

export default App;

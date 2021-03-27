import { BannerPromotions } from "./Components/BannerPromotions";
import { Cards } from "./Components/Cards";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/SideBar";
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Navbar />
      <BannerPromotions />
      <Sidebar />
      <Cards />
      <GlobalStyle />
    </>
  );
}

export default App;

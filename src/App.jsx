import { BannerPromotions } from "./Components/BannerPromotions";
import { Navbar } from "./Components/Navbar";
import { Sidebar } from "./Components/SideBar";
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <Navbar />
      <BannerPromotions />
      <Sidebar />
      <GlobalStyle />
    </>
  );
}

export default App;

import Header from "./header.tsx";
import AboutUs from "./aboutUs.tsx";
import Quality from "./qualitys.tsx";
import Services from "./services.tsx";
import Consultoria from "./consultoria";
import Divisor from "../components/divisor.tsx";
function Home() {
  return (
    <div>
      <Header />
      <AboutUs />
      <Quality />
      <div className="wrapper">
        <Services />
        <div className="arrow"></div> <Consultoria />
      </div>
    </div>
  );
}

export default Home;

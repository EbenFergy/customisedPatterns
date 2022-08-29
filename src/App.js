import "./App.css";
import Home from "./Pages/Home/Home";
import SideMenu from "./Components/sideMenu/SideMenu";
import HamburgerIcons from "./Components/sideMenu/HamburgerIcons";

function App() {
  return (
    <div className="App">
      <HamburgerIcons />
      <SideMenu />
      <Home />
    </div>
  );
}

export default App;

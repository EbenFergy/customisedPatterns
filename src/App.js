import "./App.css";
import Home from "./Pages/Home/Home";
import SideMenu from "./Components/sideMenu/SideMenu";
import SideMenuProvider from "./Store/SideMenuProvider";
import NavBar from "./Components/navBar/NavBar";

function App() {
  return (
    <div className="App">
      <SideMenuProvider>
        <NavBar />
        <SideMenu />
        <Home />
      </SideMenuProvider>
    </div>
  );
}

export default App;

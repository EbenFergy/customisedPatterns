import "./App.css";
import Home from "./Pages/Home/Home";
import SideMenu from "./Components/sideMenu/SideMenu";
import SideMenuProvider from "./Store/SideMenuProvider";

function App() {
  return (
    <div className="App">
      <SideMenuProvider>
        <SideMenu />
        <Home />
      </SideMenuProvider>
    </div>
  );
}

export default App;

import "./App.css";
import Home from "./Pages/Home/Home";
import SideMenuProvider from "./Store/SideMenuProvider";

function App() {
  return (
    <div className="App">
      <SideMenuProvider>
        <Home />
      </SideMenuProvider>
    </div>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

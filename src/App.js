import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, Quiz, Result } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
           <Route exact path="/"  Component={Home}/> 
           <Route exact path="quiz" Component={Quiz}/>
           <Route exact path="result" Component={Result}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

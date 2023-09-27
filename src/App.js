import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import { Home, Quiz, Result } from "./pages";
import { useState } from "react";

function App() {

  const [name,setName]=useState('')

  const fetchQuestion=()=>{

  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
           <Route exact path="/"  element={<Home name={name} setName={setName} fetchQuestion={fetchQuestion}/>}/> 
           <Route exact path="quiz" element={<Quiz/>}/>
           <Route exact path="result" element={<Result/>}/>
        </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;

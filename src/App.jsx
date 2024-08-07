import { useState } from "react";
import "./App.css";
import { Footer } from "./components/footer/Footer";
import { IndexPage } from "./components/main/IndexPage";
import Header from "./components/navigation/Header";

function App() {
  const [greeting, setGreeting] = useState(0) 
  return (
    <>
    
      <Header greeting={greeting} />
      <IndexPage greeting={greeting} setGreeting={setGreeting} />
      <Footer greeting={greeting} />
    </>
  );
}

export default App;

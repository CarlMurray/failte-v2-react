import { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MainBodyContainer from "./components/MainBodyContainer/MainBodyContainer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainBodyContainer />
      <Footer />
    </>
  );
}

export default App;

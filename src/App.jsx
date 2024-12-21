import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import CardPizza from "./Components/CardPizza";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <LoginPage />
      <Footer />
    </>
  );
}

export default App;

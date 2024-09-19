import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <>
      <div className="h-screen bg-black text-white">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;

import { Outlet } from "react-router-dom";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  console.log(import.meta.env.VITE_API_URL);

  return (
    <main>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;

import Header from "./assets/component/common/header";
import Footer from "./assets/component/common/footer";
import Home from "./Home.jsx";
import Login from "./assets/component/pages/login.jsx";
import About from "./assets/component/pages/About.jsx";
import { Routes, Route } from "react-router-dom";
import Career from "./assets/component/pages/Career.jsx";
import Shop from "./Shop.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
          <Route path="/shop" element={<Shop />} />
      </Routes>

      <Footer />
    </>
  );
}

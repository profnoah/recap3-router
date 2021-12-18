import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNav from "./components/MyNav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Footer from "./components/Footer";
import FullStack from "./pages/FullStack";
import Instructors from "./pages/Instructors";

function App() {
  return (
    <BrowserRouter>
      <MyNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/developing" element={<FullStack />} />
        {/* For simplicity these two components didnt coded */}
        <Route path="/data-science" element={<FullStack />} />
        <Route path="/devops" element={<FullStack />} />
        {/* ************************************************* */}
        <Route path="/instructors" element={<Instructors />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";
import Services from "./components/Services";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
import "./styles/Footer.scss";
import "./styles/mediaquery.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

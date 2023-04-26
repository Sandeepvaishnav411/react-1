import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer";
import Contact from "./components/Contact";
import Services from "./components/services";

import "./style/App.scss";
import "./style/header.scss";
import "./style/home.scss";
import "./style/footer.scss";
import "./style/contact.scss";
import "./style/mediaquery.scss";





function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services" element={<Services/>}/>
      
      
    </Routes>
    <Footer/>
   </Router>
  );
}

export default App;

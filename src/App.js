import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Teams from "./Components/Teams/Teams";
import Timeline from "./Components/Timeline/Timeline";
import About from "./Components/About/About";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/projects">{/* Project Component goes here */}</Route>
        </Switch>
        <Switch>
          <Route path="/">
            {/* <Banner /> */}
            <About />
            <Timeline />
            <Teams />
            <Speaker />
            <Faq />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

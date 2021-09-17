import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
<<<<<<< HEAD
import Teams from "./Components/Teams/teams";
import About from "./Components/About/About"
=======
import Teams from "./Components/Teams/Teams";
import Timeline from "./Components/Timeline/Timeline";
import About from "./Components/About/About";
import Faq from "./Components/Faq/Faq";
>>>>>>> 8fd7be7fb6fc03a2156f1965fb5f61d8e77a22f0

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
            <Banner />
            <About />
<<<<<<< HEAD
=======
            <Timeline />
>>>>>>> 8fd7be7fb6fc03a2156f1965fb5f61d8e77a22f0
            <Teams />
            <Faq />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

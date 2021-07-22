import "./App.css";
import Header from "./components/Header";
import DetailBlog from "./pages/DetailBlog";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/detail/:postId">
            <DetailBlog />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

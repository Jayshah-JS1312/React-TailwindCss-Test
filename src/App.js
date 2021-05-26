import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Page from "./components/Page";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      
        <div className="text-center px-auto py-2 bg-black text-white mb-4">
          <a
            className="hover:underline"
            href="https://www.ikea.com/us/en/customer-service/faq/"
          >
            Updates on safe shopping in our stores
          </a>
        </div>
        <Router>
          <Page />
          <Switch>
            <Route path="/" />
          </Switch>
          <Footer />
        </Router>
    </>
  );
}

export default App;
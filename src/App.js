import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Topbar from "./components/topbar/Topbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gezegenler from "./pages/gezegenler/Gezegenler";
import Burclar from "./pages/burclar/Burclar";
import Home from "./pages/home/Home";
import Evler from "./pages/evler/Evler";
import GezegenlerEvlerde from "./pages/gezegenlerEvlerde/GezegenlerEvlerde";
import GezegenlerBurclarda from "./pages/gezegenlerBurclarda/GezegenlerBurclarda";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Acilar from "./pages/acilar/Acilar";
import AciKaliplari from "./pages/aciKaliplari/AciKaliplari";
import Elementler from "./pages/elementler/Elementler";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Post from "./components/post/Post";
import AyFazlari from "./pages/ayFazlari/AyFazlari";
import TransitlerEvlerde from "./pages/transitlerEvlerde/TransitlerEvlerde";
import TransitlerBurclarda from "./pages/transitlerBurclarda/TransitlerBurclarda";


function App() {
  return (
    <Router>
    <Topbar/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/gezegenler">
          <Gezegenler />
        </Route>

        <Route path="/burclar">
          <Burclar />
        </Route>

        <Route path="/evler">
          <Evler />
        </Route>

        <Route path="/gezegenlerEvlerde">
          <GezegenlerEvlerde />
        </Route>

        <Route path="/gezegenlerBurclarda">
          <GezegenlerBurclarda />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/acilar">
          <Acilar />
        </Route>

        <Route path="/aciKaliplari">
          <AciKaliplari />
        </Route>

        <Route path="/elementler">
          <Elementler />
        </Route>

        <Route path="/write">
          <Write />
        </Route>

        <Route path="/settings">
          <Settings />
        </Route>

        <Route path="/post/:postId">
          <Post />
        </Route>

        <Route path="/ayFazlari">
          <AyFazlari />
        </Route>

        <Route path="/transitlerEvlerde">
          <TransitlerEvlerde />
        </Route>

        <Route path="/transitlerBurclarda">
          <TransitlerBurclarda />
        </Route>


        




     

     
      

      

   
      
    </Switch>

  </Router>
  );
}

export default App;

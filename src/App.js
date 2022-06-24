import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import {Navbar} from "./Navbar";
import {Home} from "./Home";
// import {About} from "./About";
import {Work} from "./Work";
// import {Back} from "./Back";


function App() {
  return (
    <Router>
    <div className="App">
    <Navbar/>
      <Switch>
      <Route exact path="/deep.po/" render={()=>{
        return(
            <Home/>

        )
      }}>
          </Route>
          {/* <Route exact path="/deep.po/about">
            <About />
          </Route> */}
          <Route exact path="/deep.po/Work">
            <Work/>
          </Route>
          {/* <Route exact path="/deep.po/Contact">
            <Contact/>
          </Route> */}
          <Route exact path='/deep.po/facebook' component={() => { 
            //  window.location.href = 'https://www.facebook.com/akshat.mehta.522'; 
            window.location.href = 'https://ilasariyadeep.github.io/deep.po/';

              // window.open('https://www.facebook.com/ilasariyadeep', "_blank")
              return window.location.href = 'https://ilasariyadeep.github.io/deep.po/';
          }}/>
          <Route exact path='/deep.po/instagram' component={() => { 
              // window.location.href = 'https://instagram.com/akshatmehta74?utm_medium=copy_link'; 
              window.open('https://www.instagram.com/ilasariyadeep13/', "_blank")
              return window.location.href = 'https://ilasariyadeep.github.io/deep.po/';
          }}/>
          <Route exact path='/deep.po/github' component={() => { 
              // window.location.href = 'https://www.snapchat.com/add/rishimehta74744'; 
              window.open('https://github.com/ilasariyaDEEP', "_blank")
              return window.location.href = 'https://ilasariyadeep.github.io/deep.po/';
          }}/>
          <Route exact path='/deep.po/linkedin' component={() => { 
              // window.location.href = 'https://www.linkedin.com/in/akshat-mehta-981100172'; 
              window.open('https://www.linkedin.com/in/deep-ilasariya-535b89203/', "_blank")
              return window.location.href = 'https://ilasariyadeep.github.io/deep.po/';
          }}/>
          <Route exact path='/deep.po/deepfirstrespo' component={() => { 
              // window.location.href = 'https://www.linkedin.com/in/akshat-mehta-981100172'; 
              window.open('https://ilasariyadeep.github.io/food-court-responsive-website-design/', "_blank")
              return window.location.href = 'https://ilasariyadeep.github.io/deep.po/';
          }}/>
          <Route exact path='/deep.po/deepsecondrespo' component={() => {  
              window.open('https://ilasariyadeep.github.io/Transpent-Login-Page/', "_blank")
              return window.location.href = 'https://ilasariyadeep.github.io/deep.po/';
          }}/>
          <Route path='/deep.po/contact' component={() => { 
              window.location.href = 'https://ilasariyadeep.github.io/deep.po#contact'; 

              return null;
          }}/>
        </Switch>  
    </div>
    </Router>
  );
}

export default App;

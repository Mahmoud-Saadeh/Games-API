import React from "react";
//COMPONENTS AND PAGES
import Home from "./pages/Home";
import Nav from "./components/Nav";
// GLOBAL STYLES
import GlobalStyles from "./components/GlobalStyle";
//ROUTER
import { Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
    </div>
  );
}

export default App;

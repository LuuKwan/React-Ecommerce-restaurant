import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { Footer, Navbar, Sidebar } from "./components/index_component";
import {
  ReservePage,
  HomePage,
  MenuPage,
  CartPage,
  CheckoutPage,
} from "./Pages";

//import Testing from "./components/Testing";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/reserve-table">
            <ReservePage />
          </Route>
          <Route exact path="/menu">
            <MenuPage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/checkout">
            <CheckoutPage />
          </Route>
        </Switch>
        {/* footer will be here */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

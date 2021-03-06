import React from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Message from "./components/Message";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <Products />
              <Message />
              <Cart />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

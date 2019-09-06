import React from 'react';
import Header from "./components/Header";
import Form from "./components/Form";
//import Product from "./components/Product";
//import Dashboard from "./components/Dashboard";
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      render() {
        return (
          <div>
            <nav className="buttons">
              <button onClick={() => this.setState({ section: "cancel" })}>
                Cancel
              </button>
              <button onClick={() => this.setState({ section: "add a product" })}>
                Add a Product
              </button>
            </nav>
            {this.state.section === "form" ? <Dashboard /> : null}
          </div>
        );
      }
    }

    export default App;


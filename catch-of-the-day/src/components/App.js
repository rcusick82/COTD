import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import fishes from "../sample-fishes.js"
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const { params } = this.props.match;

    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }
  addFish = (fish) => {
    // to update state - first take a copy of state so as to not mutate statusRef
    const fishes = {...this.state.fishes};
    // add new fish to fishes variable
    fishes[`fish${Date.now()}`] = fish;
    //set new fishes obj to statusRef
    this.setState({
      //ES 6 if prop and value are same, just use
      // fishes instead of fishes: fishes
      fishes
    });
  };
  loadSampleFishes = () => {
    this.setState({ fishes : fishes })
  };
  addToOrder = (key) => {
    // copy state first
    // update order or add to Order
    // call setState to update state Object

    const order = {
      ...this.state.order };

      order[key] = order[key] + 1 || 1;

      this.setState({order});
    }


  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Daily Seafood" />
          <ul className="fish-list">
            {Object.keys(this.state.fishes).map(
              key => <Fish key={key} index={key}details={this.state.fishes[key]} addToOrder={this.addToOrder} />)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish = {this.addFish} loadSampleFishes = {this.loadSampleFishes}/>
      </div>
    );
  }
}


export default App;

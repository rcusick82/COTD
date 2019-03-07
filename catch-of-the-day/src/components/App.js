import React from "react";
import PropTypes from 'prop-types';
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

  static propTypes = {
    match: PropTypes.object
  }

  componentDidMount() {
    const { params } = this.props.match;
      // first resinstate local storage
  const localStorageRef = localStorage.getItem(params.storeId);
  if (localStorageRef) {
    this.setState({
      order: JSON.parse(localStorageRef)
    });
  }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }

componentDidUpdate() {
  localStorage.setItem(this.props.match.params.storeId, JSON.stringify(this.state.order))
}

  componentWillUnmount() {
    base.removeBinding(this.ref);
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
updateFish = (key, updatedFish) => {
  //1 - take cope of state
  const fishes = { ...this.state.fishes };
  //2- update state
  fishes[key] = updatedFish;
  //3- set state
  this.setState({ fishes: fishes});
}

deleteFish = (key) => {
  const fishes = { ...this.state.fishes }

  fishes[key] = null;

  this.setState({ fishes });
}
  loadSampleFishes = () => {
    this.setState({ fishes })
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
removeFromOrder = key => {
  const order = { ...this.state.order};

  delete order[key];

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
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
        <Inventory
        addFish = {this.addFish}
        updateFish = {this.updateFish}
        deleteFish = {this.deleteFish}
        loadSampleFishes = {this.loadSampleFishes}
        fishes = {this.state.fishes}
        storeId={this.props.match.params.storeId} />
      </div>
    );
  }
}


export default App;

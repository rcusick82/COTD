import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { getFunName } from "../helpers";




class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  static propTypes = {
    history: PropTypes.object
  }

  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    // console.log(this.myInput)
    const storeName = this.myInput.current.value;
    // console.log(storeName)

    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
        type="text"
        ref={this.myInput}
        required
        placeholder="Store Name"
        defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    );
  }
}

export default StorePicker;

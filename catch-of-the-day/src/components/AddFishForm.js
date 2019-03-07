import React from "react";
import PropTypes from 'prop-types';


class AddfishForm extends React.Component {
  static propTypes = {
    addFish: PropTypes.func
  }
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    createFish = (event) => {
      event.preventDefault();
      const fish ={
        name: this.nameRef.current.value,
        // store price in cents using parseFloat
        price: parseFloat(this.priceRef.current.value),
        status: this.statusRef.current.value,
        desc: this.descRef.current.value,
        image: this.imageRef.current.value

      }
      this.props.addFish(fish);

      //referesh AddFishForm
      event.currentTarget.reset();
    }


  render() {
    return (
      <div className="AddfishForm">
      <form action="" className="fish-edit" onSubmit={this.createFish}>
        <input name="name" ref={this.nameRef} type="text" placeholder="name" />
        <input name="price" ref={this.priceRef} type="text" placeholder="price" />
        <select name="status" ref={this.statusRef}>
          <option value="available">Get Some!</option>
          <option value="unavailable">Sold Out!!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="desc" />
        <input name="image" ref={this.imageRef} type="text" placeholder="image" />
        <button type="submit">Add Fish Here</button>
      </form>
      </div>
    );
  }
}

export default AddfishForm;

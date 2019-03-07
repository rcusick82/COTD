import React from "react";
import PropTypes from 'prop-types';
import { formatPrice } from "../helpers";

class Fish extends React.Component {
  static propTypes = {
    addToOrder: PropTypes.func,
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      desc: PropTypes.string,
      status: PropTypes.string
    })
  }
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }

  render() {
    const { image, name, price, desc, status } = this.props.details;
    const isAvailable = status === 'available';
    return(
      <li className="menu-fish">
        <img src={image} alt={ name }/>
        <h2 className="fish-name">
        { name }
        <span className="price"> { formatPrice(price) }  </span>
        </h2>
        <p className="desc"> {desc}</p>
        <button onClick={this.handleClick} disabled={!isAvailable}>{isAvailable ? 'Add To Cart' : 'Sold out!'} </button>
      </li>
    )
  }
}

export default Fish;

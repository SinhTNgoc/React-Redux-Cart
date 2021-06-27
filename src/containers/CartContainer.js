import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cart from "./../components/Cart";
import CartItem from "./../components/CartItem";
import CartResult from "../components/CartResult";
import * as Message from "./../constants/Message";

class CartContainer extends React.Component {
  render() {
    var cart = this.props.cart;
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }

  showCartItem = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((item, index) => {
        return <CartItem key={index} item={item} index={index} />;
      });
      return result;
    }
  };

  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />;
    }
    return result;
  };
}

//Check PropTypes
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      props: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
      }),
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
};
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};
export default connect(mapStateToProps, null)(CartContainer);

import React from "react";
import { connect } from "react-redux";
import Products from "./../components/Products";
import Product from "./../components/Product";
import PropTypes from "prop-types";

class ProductsContainer extends React.Component {
  render() {
    var products = this.props.products;
    return <Products>{this.showProduct(products)}</Products>;
  }
  showProduct = (products) => {
    var result = "";
    if (products.length) {
      result = products.map((product, index) => {
        return <Product key={index} product={product} />;
      });
    }
    return result;
  };
}
//Check PropTypes
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);

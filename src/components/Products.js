import React from "react";
import Product from "./Product";
import {connect} from "react-redux";

class Products extends React.Component {
  render() {
    var products = this.props.products;

    return (
    <section className="section">
      <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
      <div className="row">
       {this.showProduct(products)}
      </div>
    </section>
    );
  }
  showProduct = (products) =>{
    var result = null;
    if(products.length) {
      result = products.map((product, index) => {
        return <Product key={index} product={product}/>
      });
    }
    return result;
  }
}
 
 const mapStateToProps =(state) => {
  return {
    products: state.products
  }
}
const mapDispatchToProps = (dispatch,props) => {
  return {

  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Products);

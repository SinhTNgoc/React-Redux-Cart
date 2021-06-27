import * as Types from "./../constants/ActionType";
var data = JSON.parse(localStorage.getItem("CART"));
var initialState = data?data:[
  // {
  //   product: {
  //     id: 1,
  //     name: "Iphone 7 plus",
  //     img: "https://24hstore.vn/images/products/2020/04/19/large/iphone-7-plus--red_1587272645_1.jpg",
  //     description: "San pham do Apple san xuat",
  //     price: 500,
  //     inventory: 10,
  //     rating: 3,
  //   },
  //   quantity: 5,
  // },
  // {
  //   product: {
  //     id: 3,
  //     name: "Iphone 11",
  //     img: "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-xi-do-600x600.jpg",
  //     description: "San pham do Apple san xuat",
  //     price: 1500,
  //     inventory: 20,
  //     rating: 4,
  //   },
  //   quantity: 2,
  // },
];

const cart = (state = initialState, action) => {
  var product = action.product;
  var quantity = action.quantity;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push({
          product: product,
          quantity: quantity,
        });
      }
      localStorage.setItem("CART", JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};
var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length>0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
    
  }
  return index;
};

export default cart;

var initialState = [
  {
    id: 1,
    name: "Iphone 7 plus",
    img: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "San pham do Apple san xuat",
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: "Iphone X ",
    img: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "San pham do Apple san xuat",
    price: 1000,
    inventory: 15,
    rating: 5
  },
  {
    id: 3,
    name: "Iphone 11",
    img: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
    description: "San pham do Apple san xuat",
    price: 1500,
    inventory: 20,
    rating: 4
  },
];

const product = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default product;

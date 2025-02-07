import 'react';

// eslint-disable-next-line react/prop-types
const ProductItem = ({ productId, productName, price, imageUrl }) => {
  return (
    <div className="product-card">
      <p>ID: {productId}</p>
      <img src={imageUrl} alt={productName} className='product-image' />
      <h3>{productName}</h3>
      <p>{price}$</p>
    </div>
  );
}

export default ProductItem;
import { useState } from 'react';
import ProductItem from './ProductItem';


const ProductList = () => {

  const [products] = useState([
    { productId: "AD1", productName: "Laptop", price: 800, imageUrl: "https://cdn.mercandu.com/products/2f7166bf-db8b-4e9d-ab28-16081056ad26.jpg" },
    { productId: "AC31", productName: "Mouse", price: 20, imageUrl: "https://mercandu.nyc3.digitaloceanspaces.com/products/225d2503-8f3c-415c-9df6-6de609097932.png" },
    { productId: "DQW2", productName: "Teclado", price: 50, imageUrl: "https://images-na.ssl-images-amazon.com/images/I/714eFLKireL._AC_SX679_.jpg" },
    { productId: "12W1", productName: "Monitor", price: 150, imageUrl: "https://mercandu.nyc3.digitaloceanspaces.com/ProductVariationImages/ca6baf45-f172-412f-8c9b-14fda7dd9cca.jpg" },
    { productId: "DW1", productName: "Audífonos", price: 60, imageUrl: "https://mercandu.nyc3.digitaloceanspaces.com/images/241004d3-501c-498a-b7e1-4ef2a2a7aea0.png" },
    { productId: "FHDB", productName: "Micrófono", price: 100, imageUrl: "https://mercandu.nyc3.digitaloceanspaces.com/products/73bc269c-169d-445e-8f8a-b24ca45ff251.jpg" },
    { productId: "W4Y", productName: "Silla Gamer", price: 200, imageUrl: "https://mercandu.nyc3.digitaloceanspaces.com/images/ae28db10-07c9-4814-af72-d12cea69daa4.png" },
    { productId: "QEV", productName: "Impresora", price: 120, imageUrl: "https://mercandu.nyc3.digitaloceanspaces.com/ProductVariationImages/f1fffbbd-1d05-449e-8b38-427930047dce.jpg" },
    { productId: "12ED", productName: "Tablet", price: 300, imageUrl: "https://mercandu.nyc3.digitaloceanspaces.com/ProductVariationImages/4a0f6a74-bf52-4470-b093-84a1f5c42529.jpg" },
    { productId: "QE3EV", productName: "Smartphone", price: 700, imageUrl: "https://mercandu.nyc3.digitaloceanspaces.com/products/389cdb31-46bd-4c5c-a7dd-554fd77d8ef6.jpg" }
  ]);
  


  return (
    <div>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem key={product.productId} {...product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList;
import 'react';
import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="container">
      <h1>Productos disponibles</h1>
      <ProductList />
    </div>
  );
}

export default App;

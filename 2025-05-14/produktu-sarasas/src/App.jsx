import productsData from './data/products';
import Product from './components/product/Product';
import './App.css'


function App() {
  console.log(productsData);

  return (
    <>
      <div class="container" style={{ maxWidth: 1024 }}>
        {productsData.map(value => <Product key={value.id} data={value} />)}
      </div>
    </>
  )
}

export default App

import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home'
import ContentRow from './components/Quantity/ContentRow';
import ContentLastProd from './components/LastProduct/ContentLastProd';
import CategoryContainer from './components/Categorias/CategoryContainer';
import ProductContainer from './components/Categorias/ProductContainer';
import QuantityProduct from './components/Quantity/QuantityProduct';

function App() {

  const [ products , setProducts ] = useState([]);
  const [ users, setUsers ] = useState([]);

  
      useEffect(()=>{
          fetch('http://localhost:3000/api/products').then(res => res.json()).then(results => setProducts(results));
      },[]);

      useEffect(()=>{
          fetch('http://localhost:3000/api/users').then(res=> res.json()).then(results => setUsers(results))
      },[])


  return (
    <div className="App">
      <Home>
        <ContentRow>
            <QuantityProduct data={products} />
            <QuantityProduct data={users}/>
            <QuantityProduct data={products.categories}/>
        </ContentRow> 
        <ContentRow>
            <ContentLastProd data={products.last} />
            <CategoryContainer data={products}/>
        </ContentRow> 
          <ContentRow>
            <ProductContainer data={products}/>
          </ContentRow>
      </Home>
    </div>
  );
}

export default App;

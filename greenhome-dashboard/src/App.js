import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';
import Home from './components/Home'
import Icons from './components/Icons'
import ContentRow from './components/Quantity/ContentRow';
import ContentLastProd from './components/LastProduct/ContentLastProd';
import CategoryContainer from './components/Categorias/CategoryContainer';
import ProductContainer from './components/Categorias/ProductContainer';
import QuantityProduct from './components/Quantity/QuantityProduct';

function App() {

  const colorstyle = ['primary', 'success', 'warning']
  const icons = ["fas fa-clipboard-list fa-2x text-gray-300","fas fa-clipboard-list fa-2x text-gray-300","fas fa-user-check fa-2x text-gray-300"]

  const [ products , setProducts ] = useState([]);
  const [ users, setUsers ] = useState([]);

  
      useEffect(()=>{
          fetch('https://greenhomearg.herokuapp.com/api/products').then(res => res.json()).then(results => setProducts(results));
      },[]);

      useEffect(()=>{
          fetch('https://greenhomearg.herokuapp.com/api/users').then(res=> res.json()).then(results => setUsers(results))
      },[])


  return (
    
    <div className="App">
      <Home>
      <Icons />
        <ContentRow>
            <QuantityProduct data={products} color={colorstyle[0]} icon={icons[0]}/>
            <QuantityProduct data={users} color={colorstyle[1]} icon={icons[1]}/>
            <QuantityProduct data={products.categories} color={colorstyle[2]} icon={icons[2]}/>
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

import '../App.css' ;
import cors from 'cors'
import '../components/Home.css' ;
import ContentRow from '../components/Quantity/ContentRow';
import Row from '../components/Row';
import { useState, useEffect } from 'react';


export default function Home() {

    const [ products , setProducts ] = useState([]);
    const [ users, setUsers ] = useState([]);

    const LoadData = () => {
        
    useEffect(()=>{
        fetch('http://localhost:3000/api/products').then(res => res.json()).then(results => setProducts(results));
    });

    useEffect(()=>{
       fetch('http://localhost:3000/api/users').then(res=> res.json()).then(results => setUsers(results))  
    })
      
    }

    document.addEventListener('load', LoadData())

    return(
        <div className='home'>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Green Home Dashboard</h1>
			</div>
            <ContentRow products={products} users={users} />   
            <Row products={products}/> 
        </div>
    )
}
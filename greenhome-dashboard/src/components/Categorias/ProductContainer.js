import '../../App.css' ;
import ProductCard from './ProductCard'

export default function ProductContainer(props){
    const products = props.data.products
    console.log(props)
    return(
        <div className="col-lg-20 mb-3">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Products in Data Base</h6>
            </div>
            <div className="card-body">
            <div className="row">
                    {props.data.products ? 
                        products.map(product=> {return <ProductCard product={product}/>}) :
                        <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                        </div> }
                    </div>
                </div>
            </div>
        </div>

    )

}

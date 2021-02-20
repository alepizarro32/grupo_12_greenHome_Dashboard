import '../../App.css' ;
import ProductCard from './ProductCard'

export default function ProductContainer(props){
    console.log(props)
    return(
        <div className="col-lg-12 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Products in Data Base</h6>
            </div>
            <div className="card-body">
                    <div className="row">
                        <ProductCard />
                    </div>
                </div>
            </div>
        </div>

    )

}

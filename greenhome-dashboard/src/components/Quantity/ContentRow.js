import '../../App.css' ;
import QuantityProduct from './QuantityProduct';
export default function ContentRow({products , users }) {


    return(
        <div className="row">

            <QuantityProduct data={products} />

            <QuantityProduct data={users}/>
            
            <QuantityProduct data={products.categories}/>

        </div>
    )
}

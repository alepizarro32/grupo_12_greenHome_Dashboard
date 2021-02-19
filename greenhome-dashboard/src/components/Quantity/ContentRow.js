import '../../App.css' ;
import QuantityProduct from './QuantityProduct';
export default function ContentRow(props) {


    return(
        <div className="row">

            <QuantityProduct data={props.products} />

            <QuantityProduct data={props.users}/>
            
            <QuantityProduct data={props.products.categories}/>

        </div>
    )
}
    
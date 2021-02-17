import '../../App.css' ;
import QuantityProduct from './QuantityProduct';
import AmountProduct from './AmountProduct'
import UserQuantity from './UserQuantity'

export default function ContentRow() {


    return(
        <div className="row">

            <QuantityProduct />

            <QuantityProduct />
            
            <QuantityProduct />

        </div>
    )
}

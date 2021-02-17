import '../../App.css' ;
import QuantityProduct from './QuantityProduct';
import AmountProduct from './AmountProduct'
import UserQuantity from './UserQuantity'

export default function ContentRow() {


    return(
        <div className="row">

        <div className="col-md-4 mb-4">
        <QuantityProduct />
        </div>

     
        <div className="col-md-4 mb-4">
        <AmountProduct />
        </div>

       
        <div className="col-md-4 mb-4">
        <UserQuantity />
        </div>
    </div>
    )
}

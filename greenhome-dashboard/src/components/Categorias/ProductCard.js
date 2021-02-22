import '../../App.css' ;

export default function ProductCard(props) {


    return(
        <div className="col-lg-2 mb-3">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                {props && props.product.name} 
                </div>
            </div>
        </div>
    )
}
ProductCard.defaultProps = {
    name: "",
    count: ''
}
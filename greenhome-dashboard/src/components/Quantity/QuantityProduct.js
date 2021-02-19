import '../../App.css' ;
export default function QuantityProduct( props ) {
    console.log(props)
    return(
    <div className="col-md-4 mb-4">
        <div >
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            { props.data.data ? <div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> {props.data.data} in Data Base</div> : 
                            <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>}
                            <div className="h5 mb-0 font-weight-bold text-gray-800">{props.data.count} </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                        </div>
                </div>     </div>
            
            </div>
        </div>
    </div>
    )
}

QuantityProduct.defaultProps = {
    data: {data: '', count:''}
}

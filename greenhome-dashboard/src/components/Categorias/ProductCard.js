import '../../App.css' ;

export default function ProductCard(props) {

    const style = {
        width:'',
        height: '12rem',
        overflow:'hidden',
        position:'relative',
        whitespace: 'nowrap'
    }

    return(
        <div className=" col-lg-4 p-3">
            <div className="card" >
                        {props.product.image? <img className='card-img-top' src={props.product.image} alt="Product"/> : <div className="spinner-border"><span className="sr-only">Loading...</span></div>}
                        <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props && props.product.name} </h5>
                        <p className="card-text" style={style}>{props && props.product.description}<span>...</span></p>
                    </div>
            </div>
        </div>
    )
}
ProductCard.defaultProps = {
    name: "",
    count: ''
}
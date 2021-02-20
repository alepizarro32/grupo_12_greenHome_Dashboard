import '../../App.css' ;

export default function CategoryCard(props) {

    

    return(
        <div className="col-lg-12 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                   {props && props.category.name} 
                    {props  && <span className='font-weight-light'> ({props.category.count} en total)</span>} 
                </div>
            </div>
        </div>
    )
}

CategoryCard.defaultProps = {
    name: "",
    count: ''
}
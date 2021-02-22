import '../../App.css' ;
import CategoryCard from './CategoryCard'

export default function CategoryContainer(props){
    const categories = props.data.categories
    console.log(categories)
    return(
        <div className="col-lg-6 mb-4">						
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
            </div>
            <div className="card-body">
                    <div className="row">
                    {props.data.categories ? 
                        categories.countByCategory.map(category=> {return <CategoryCard category={category}/>}) :
                        <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                        </div> }
                    </div>
                </div>
            </div>
        </div>


    )

}


CategoryContainer.defaultProps = {
    data: "",
    categories: ''
}
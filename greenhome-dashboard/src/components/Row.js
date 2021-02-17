import '../App.css' ;
import ContentLastProd from './LastProduct/ContentLastProd';
import CategoryInDB from './Categorias/CategoryInDB';

export default function Row() {


    return(
   
        <div className="row">
            <ContentLastProd />
            <CategoryInDB />
        </div>

    )
}
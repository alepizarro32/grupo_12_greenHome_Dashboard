import '../App.css' ;
import ContentLastProd from './LastProduct/ContentLastProd';
import CategoryContainer from './Categorias/CategoryContainer';
import ProductCard from './Categorias/ProductCard'




export default function Row(props) {


    return(
        <div className="row">
            <ContentLastProd data={props.products.last} />
            <CategoryContainer>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </CategoryContainer>
        </div>
    )
}
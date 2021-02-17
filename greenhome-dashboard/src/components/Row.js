import '../App.css' ;
import ContentLastProd from './LastProduct/ContentLastProd';
import CategoryInDB from './Categorias/CategoryInDB';
import CategoryContainer from './Categorias/CategoryContainer';
import ProductCard from './Categorias/ProductCard'
export default function Row() {


    return(
        <div className="row">
            <ContentLastProd />
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
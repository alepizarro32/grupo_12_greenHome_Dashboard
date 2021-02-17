import '../../App.css' ;
import ProductCard from './ProductCard'
export default function CategoryInDB() {


    return(
        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div className="card-body">
									<div class="row">
                                    <ProductCard />
									<ProductCard />
									<ProductCard />
									<ProductCard />
									<ProductCard />
									<ProductCard />
									</div>
								</div>
							</div>
						</div>
    )
}

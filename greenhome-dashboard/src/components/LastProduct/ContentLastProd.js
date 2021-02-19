import { useState, useEffect} from 'react';
import '../../App.css' ;


export default function ContentLastProd(props) {

let [ description , setDescription ] = useState('Loading...')

useEffect(()=>{
    setDescription(props.data.description)
 });

 let [ image, setImage ] = useState()


useEffect(()=>{
    setImage(props.data.image)
 });


    return(
        
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
					{ props.data ? 
                    <h6 className="m-0 text-primary font-weight-bold">Last product: <span className='font-weight-medium'>{props.data.name}</span> </h6> :
                    <div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                            </div>
                    }
                </div>
            
                <div className="card-body">
                    <div className='text-center'>
                    {props.data.image? <img className='img-fluid px-3 px-sm-4 mt-3 mb-4' src={image} alt="Product"/> : <div className="spinner-border"><span className="sr-only">Loading...</span></div>}
                    </div>
                    
                    <p>{description}</p>
                    
                    <a target="_blank" rel="nofollow" href={props.data.detail}>View product detail</a>
                </div> 
            </div>   
        </div>
    )
}


ContentLastProd.defaultProps = {
    data: {
        name: '',
        description: '',
        detail: '#'
    }
}
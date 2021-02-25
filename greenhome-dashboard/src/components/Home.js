import '../App.css' ;
import '../components/Home.css' ;




export default function Home(props) {

    return(
        <div className='home p-3'>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Green Home Dashboard</h1>
			</div>
            {props.children}
        </div>
    )
}
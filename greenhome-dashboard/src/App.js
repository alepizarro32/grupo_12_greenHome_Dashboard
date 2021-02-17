import logo from './logo.svg';
import './App.css';

import ContentRow from './components/Quantity/ContentRow';

import Row from './components/Row';

function App() {
  return (
    <div className="App">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
      <ContentRow />   
      <Row/> 
    </div>
  );
}

export default App;

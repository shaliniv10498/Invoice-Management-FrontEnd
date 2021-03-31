import logo from './logo.svg';
import './App.css';

import InvoiceGridContainer from './Container/InvoiceGridContainer';
function App() {
  return (
    <div style={{overflowY:"hidden"}}>
      <div className="Logo">
       
      </div>
      <div >
         <InvoiceGridContainer/>
      </div>

    </div>
  );
}

export default App;

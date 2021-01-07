import React from 'react';
import Formulary from './Components/Formulary';

function App() {
  return (
    <React.Fragment>
   <h1>Patient Manager</h1>
   <div className='container'> 
     <div className='row'>
       <div className='one-half column'>
          <Formulary/>
       </div>
       <div className='one-half column'>
         
       </div>
     </div>
   </div>
   
   </React.Fragment>
  );
}

export default App;

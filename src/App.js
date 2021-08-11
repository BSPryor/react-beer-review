
import './App.css';
import React, {useState} from  "react";
import List from './components/list';
import Form from './components/form';

function App() {
  const [beers, setBeers] = useState([])

  const addBeer = function(beer) {
    setBeers(beers.concat([beer]))
  }

  return (
    <div>
      <List
      beers={beers}
      />
      <Form
        addBeer={addBeer}
      />
    </div>
  );
}

export default App;

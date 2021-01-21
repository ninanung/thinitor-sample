import './App.css';
import {useEffect, useState} from 'react'
import Thinitor from 'thinitor';

function App() {
  const [thinitor, setThinitor] = useState(null);

  useEffect(() => {
    setThinitor(new Thinitor('thinitor'));
  }, [])

  return (
    <div className="outer_container">
      <h1 className="head_title">Thintor</h1>
      <div id="thinitor" className="inner_container">
      </div>
    </div>
  );
}

export default App;

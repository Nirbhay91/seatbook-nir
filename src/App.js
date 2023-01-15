import './App.css';
import { useState } from 'react';
import ShowList from './ShowList';
import { SeatBook } from './SeatBook';

function App() {
  const [showList, setShowList] = useState(false);
  return (
    <div className="App">
      {!showList && <SeatBook setShowList={setShowList} />}
      {showList && <ShowList setShowList={setShowList} />}
    </div>
  );
}

export default App;
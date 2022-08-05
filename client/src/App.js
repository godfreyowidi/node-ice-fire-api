import React from 'react';
import {useEffect, useState} from 'react';

function App() {

  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch('/api')
    .then(response => response.json())
    .then(data => { setBackendData(data) })
  }, []);
  console.log(backendData);

  return (
    <div>
      {backendData.map((book) => {
        return (
          <div>
            <h3><a href="details">{book.name} - {book.authors}</a></h3>
          </div>
        )
      })}
    </div>
  )
}

export default App;
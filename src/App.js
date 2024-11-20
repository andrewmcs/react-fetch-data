import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }

  useEffect(() =>
  {
    fetchData();
  }, []);

  return Object.keys(user).length > 0 ? (
    <div className="App">
      <h1>Got some data!</h1>
    </div>
  ) : (<h1>Data pending...</h1>);
}

export default App;

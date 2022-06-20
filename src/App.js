import { useEffect, useState } from 'react';
import fetchFootball from './api/fetchFootball';
import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';

function App() {
  const [competitions, setCompetitions] = useState([]);

  useEffect(() => {
    async function footballData() {
      const data = await fetchFootball();
      setCompetitions(data);
      return data;
    }
    footballData();
  }, []);

  const data = competitions.slice(1, 10);

  return (
    <>
      <Header />
      <HomePage data={data} />
    </>
  );
}

export default App;
